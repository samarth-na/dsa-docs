"use client";

import { useMemo, useRef, useState } from "react";
import posthog from "posthog-js";

type MatrixRow = Record<string, string>;

type CatalogRow = {
  Question: string;
  Types: string;
  Description: string;
  Difficulty: string;
};

type Props = {
  matrixRows: MatrixRow[];
  catalogRows: CatalogRow[];
};

type DifficultyFilter = "All" | "Basic" | "Easy" | "Medium" | "Hard";

type GraphNode = {
  id: string;
  label: string;
  kind: "topic" | "question";
};

type PositionedNode = GraphNode & {
  x: number;
  y: number;
};

type GraphEdge = {
  source: string;
  target: string;
};

const WIDTH = 1260;
const HEIGHT = 760;

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

function isLinked(row: MatrixRow, topic: string): boolean {
  const value = row[topic];
  return value === "1" || value === "true";
}

function buildLayout(nodes: GraphNode[], edges: GraphEdge[]): PositionedNode[] {
  const positioned = nodes.map((node, i) => ({
    ...node,
    x: WIDTH / 2 + Math.cos((i / Math.max(1, nodes.length)) * Math.PI * 2) * 220,
    y: HEIGHT / 2 + Math.sin((i / Math.max(1, nodes.length)) * Math.PI * 2) * 220
  }));

  const indexById = new Map(positioned.map((n, i) => [n.id, i]));

  for (let step = 0; step < 160; step += 1) {
    for (let i = 0; i < positioned.length; i += 1) {
      for (let j = i + 1; j < positioned.length; j += 1) {
        const a = positioned[i];
        const b = positioned[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distSq = dx * dx + dy * dy + 0.01;
        const force = 4200 / distSq;
        const dist = Math.sqrt(distSq);
        const ux = dx / dist;
        const uy = dy / dist;

        a.x -= ux * force;
        a.y -= uy * force;
        b.x += ux * force;
        b.y += uy * force;
      }
    }

    for (const edge of edges) {
      const aIndex = indexById.get(edge.source);
      const bIndex = indexById.get(edge.target);
      if (aIndex === undefined || bIndex === undefined) continue;

      const a = positioned[aIndex];
      const b = positioned[bIndex];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist = a.kind === "topic" || b.kind === "topic" ? 95 : 125;
      const pull = (dist - targetDist) * 0.035;
      const ux = dx / dist;
      const uy = dy / dist;

      a.x += ux * pull;
      a.y += uy * pull;
      b.x -= ux * pull;
      b.y -= uy * pull;
    }

    for (const node of positioned) {
      node.x += (WIDTH / 2 - node.x) * 0.01;
      node.y += (HEIGHT / 2 - node.y) * 0.01;
      node.x = Math.max(24, Math.min(WIDTH - 24, node.x));
      node.y = Math.max(24, Math.min(HEIGHT - 24, node.y));
    }
  }

  return positioned;
}

export function QuestionGraphView({ matrixRows, catalogRows }: Props) {
  const topicKeys = useMemo(() => {
    if (matrixRows.length === 0) return [];
    return Object.keys(matrixRows[0]).filter((key) => key !== "Title");
  }, [matrixRows]);

  const catalogByQuestion = useMemo(() => {
    const map = new Map<string, CatalogRow>();
    for (const row of catalogRows) {
      map.set(normalize(row.Question), row);
    }
    return map;
  }, [catalogRows]);

  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");
  const [leetcodeOnly, setLeetcodeOnly] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [positionOverrides, setPositionOverrides] = useState<Record<string, { x: number; y: number }>>({});
  const [isPanning, setIsPanning] = useState(false);
  const [lastPointer, setLastPointer] = useState<{ x: number; y: number } | null>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const filteredRows = useMemo(() => {
    return matrixRows.filter((row) => {
      const title = row.Title ?? "";
      const catalog = catalogByQuestion.get(normalize(title));

      if (difficulty !== "All" && (catalog?.Difficulty ?? "") !== difficulty) {
        return false;
      }

      if (leetcodeOnly && !(catalog?.Types ?? "").toLowerCase().includes("leetcode")) {
        return false;
      }

      if (selectedTopics.length > 0 && !selectedTopics.some((topic) => isLinked(row, topic))) {
        return false;
      }

      return true;
    });
  }, [catalogByQuestion, difficulty, leetcodeOnly, matrixRows, selectedTopics]);

  const graphData = useMemo(() => {
    const topicsInUse = new Set<string>();
    const nodes: GraphNode[] = [];
    const edges: GraphEdge[] = [];

    for (const row of filteredRows) {
      const question = row.Title;
      if (!question) continue;

      nodes.push({ id: `q:${question}`, label: question, kind: "question" });
      for (const topic of topicKeys) {
        if (!isLinked(row, topic)) continue;
        topicsInUse.add(topic);
        edges.push({ source: `q:${question}`, target: `t:${topic}` });
      }
    }

    for (const topic of topicsInUse) {
      nodes.push({ id: `t:${topic}`, label: topic, kind: "topic" });
    }

    return {
      nodes: buildLayout(nodes, edges),
      edges
    };
  }, [filteredRows, topicKeys]);

  const nodes = useMemo(
    () => graphData.nodes.map((node) => ({ ...node, ...(positionOverrides[node.id] ?? {}) })),
    [graphData.nodes, positionOverrides]
  );

  const nodeById = useMemo(() => new Map(nodes.map((node) => [node.id, node])), [nodes]);

  const connectedByNode = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const edge of graphData.edges) {
      if (!map.has(edge.source)) map.set(edge.source, new Set());
      if (!map.has(edge.target)) map.set(edge.target, new Set());
      map.get(edge.source)?.add(edge.target);
      map.get(edge.target)?.add(edge.source);
    }
    return map;
  }, [graphData.edges]);

  const activeNodeId = hoveredNodeId ?? selectedNodeId;

  const catalogByQuestionTitle = useMemo(() => {
    const map = new Map<string, CatalogRow>();
    for (const row of catalogRows) {
      map.set(row.Question, row);
    }
    return map;
  }, [catalogRows]);

  const selectedNode = activeNodeId ? nodeById.get(activeNodeId) : undefined;

  function resetGraphSelectionState() {
    setPositionOverrides({});
    setSelectedNodeId(null);
    setHoveredNodeId(null);
  }

  function getSvgPoint(clientX: number, clientY: number): { x: number; y: number } | null {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    return {
      x: ((clientX - rect.left) / rect.width) * WIDTH,
      y: ((clientY - rect.top) / rect.height) * HEIGHT
    };
  }

  function toGraphSpace(point: { x: number; y: number }): { x: number; y: number } {
    return {
      x: (point.x - pan.x) / zoom,
      y: (point.y - pan.y) / zoom
    };
  }

  function handleWheel(event: React.WheelEvent<SVGSVGElement>) {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }
    const point = getSvgPoint(event.clientX, event.clientY);
    if (!point) return;

    const factor = event.deltaY < 0 ? 1.1 : 0.9;
    const nextZoom = Math.max(0.45, Math.min(2.8, zoom * factor));
    const graphPoint = toGraphSpace(point);

    setZoom(nextZoom);
    setPan({
      x: point.x - graphPoint.x * nextZoom,
      y: point.y - graphPoint.y * nextZoom
    });
  }

  function handleMouseMove(event: React.MouseEvent<SVGSVGElement>) {
    const point = getSvgPoint(event.clientX, event.clientY);
    if (!point) return;

    if (draggingNodeId) {
      const graphPoint = toGraphSpace(point);
      setPositionOverrides((prev) => ({
        ...prev,
        [draggingNodeId]: {
          x: Math.max(16, Math.min(WIDTH - 16, graphPoint.x)),
          y: Math.max(16, Math.min(HEIGHT - 16, graphPoint.y))
        }
      }));
      return;
    }

    if (isPanning && lastPointer) {
      setPan((prev) => ({
        x: prev.x + (point.x - lastPointer.x),
        y: prev.y + (point.y - lastPointer.y)
      }));
      setLastPointer(point);
    }
  }

  function endInteraction() {
    setDraggingNodeId(null);
    setIsPanning(false);
    setLastPointer(null);
  }

  return (
    <section className="mt-8">
      <div className="mb-4 rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <label className="text-sm text-[var(--text-secondary)]">
            Difficulty
            <select
              value={difficulty}
              onChange={(e) => {
                const value = e.target.value as DifficultyFilter;
                setDifficulty(value);
                resetGraphSelectionState();
                posthog.capture("graph_difficulty_filter_changed", { difficulty: value });
              }}
              className="ml-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-page)] px-2 py-1 text-sm text-[var(--text-primary)]"
            >
              <option>All</option>
              <option>Basic</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <input
              type="checkbox"
              checked={leetcodeOnly}
              onChange={(e) => {
                const checked = e.target.checked;
                setLeetcodeOnly(checked);
                resetGraphSelectionState();
                posthog.capture("graph_leetcode_filter_toggled", { enabled: checked });
              }}
            />
            LeetCode only
          </label>
        </div>

        <div className="flex flex-wrap gap-2">
          {topicKeys.map((topic) => {
            const active = selectedTopics.includes(topic);
            return (
              <button
                key={topic}
                type="button"
                onClick={() => {
                  const nowActive = !selectedTopics.includes(topic);
                  setSelectedTopics((prev) =>
                    prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
                  );
                  resetGraphSelectionState();
                  posthog.capture("graph_topic_filter_toggled", { topic, enabled: nowActive });
                }}
                className={active
                  ? "rounded-full border border-[color-mix(in_srgb,var(--brand-1)_40%,var(--border-soft))] bg-[color-mix(in_srgb,var(--brand-1)_18%,transparent)] px-2 py-1 text-xs text-[var(--text-primary)]"
                  : "rounded-full border border-[var(--border-soft)] bg-[var(--bg-page)] px-2 py-1 text-xs text-[var(--text-secondary)]"}
              >
                {topic}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
          <button
            type="button"
            onClick={() => {
              setZoom(1);
              setPan({ x: 0, y: 0 });
              posthog.capture("graph_view_reset");
            }}
            className="rounded-md border border-[var(--border-soft)] px-2 py-1 hover:bg-[var(--bg-page)]"
          >
            Reset View
          </button>
          <span>Zoom: {zoom.toFixed(2)}x</span>
          <span>Drag background to pan</span>
          <span>Scroll to zoom</span>
          <span>Drag node to pin</span>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="overflow-hidden rounded-lg border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--bg-page)_85%,black)]">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="h-[72vh] w-full touch-none"
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={endInteraction}
            onMouseLeave={endInteraction}
            onMouseDown={(event) => {
              if (event.button !== 0) return;
              if (event.target !== event.currentTarget) return;
              const point = getSvgPoint(event.clientX, event.clientY);
              if (!point) return;
              setIsPanning(true);
              setLastPointer(point);
            }}
          >
            <g transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}>
          {graphData.edges.map((edge) => {
            const source = nodeById.get(edge.source);
            const target = nodeById.get(edge.target);
            if (!source || !target) return null;

            const isConnected =
              !activeNodeId || edge.source === activeNodeId || edge.target === activeNodeId;

            return (
              <line
                key={`${edge.source}-${edge.target}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isConnected ? "var(--brand-2)" : "var(--text-sidebar)"}
                strokeOpacity={isConnected ? "0.55" : "0.18"}
                strokeWidth={isConnected ? "1.25" : "0.8"}
              />
            );
          })}

          {nodes.map((node) => {
            const isTopic = node.kind === "topic";
            const isActive = activeNodeId === node.id;
            const isRelated = activeNodeId ? connectedByNode.get(activeNodeId)?.has(node.id) : false;
            const nodeOpacity = !activeNodeId || isActive || isRelated ? 1 : 0.35;

            return (
              <g
                key={node.id}
                opacity={nodeOpacity}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onMouseDown={(event) => {
                  event.stopPropagation();
                  if (event.button !== 0) return;
                  setSelectedNodeId(node.id);
                  setDraggingNodeId(node.id);
                  posthog.capture("graph_node_selected", { node_id: node.id, node_label: node.label, node_kind: node.kind });
                }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isTopic ? (isActive ? 10 : 7) : isActive ? 6 : 4}
                  fill={isTopic ? "var(--brand-1)" : "var(--brand-2)"}
                  stroke={isActive ? "#f8fafc" : "transparent"}
                  strokeWidth={isActive ? 1.8 : 0}
                />
                <text
                  x={node.x + 8}
                  y={node.y - 8}
                  fill="var(--text-primary)"
                  fontSize={isTopic ? 13 : 11}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
            </g>
        </svg>
        </div>

        <aside className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">Graph Details</h3>
          <div className="space-y-2 text-sm text-[var(--text-secondary)]">
            <div>Questions: {filteredRows.length}</div>
            <div>Topics: {new Set(graphData.edges.map((e) => e.target)).size}</div>
            <div>Edges: {graphData.edges.length}</div>
          </div>

          <hr className="my-4 border-[var(--border-soft)]" />

          {selectedNode ? (
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div className="font-medium text-[var(--text-primary)]">{selectedNode.label}</div>
              <div>Type: {selectedNode.kind}</div>
              <div>Connections: {connectedByNode.get(selectedNode.id)?.size ?? 0}</div>
              {selectedNode.kind === "question" ? (
                <>
                  <div>Difficulty: {catalogByQuestionTitle.get(selectedNode.label)?.Difficulty ?? "Unknown"}</div>
                  <div>Tags: {catalogByQuestionTitle.get(selectedNode.label)?.Types ?? "Unknown"}</div>
                </>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">Click a node to inspect details.</p>
          )}
        </aside>
      </div>
    </section>
  );
}
