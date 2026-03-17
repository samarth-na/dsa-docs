<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. The project already had a strong PostHog foundation in place (`posthog-js` installed, `instrumentation-client.ts` initializing PostHog with a reverse proxy, and nine events captured across four components). The wizard added environment variable configuration, one new event, and a PostHog dashboard with five insights.

## Changes made

| File | Change |
|------|--------|
| `.env.local` | Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` |
| `components/docs/toc-nav.tsx` | Added `"use client"`, imported `posthog-js`, added `toc_link_clicked` capture |

## Events tracked

| Event | Description | File |
|-------|-------------|------|
| `question_filter_applied` | User applies a question type filter in the sidebar | `components/docs/sidebar-nav.tsx` |
| `sidebar_link_clicked` | User navigates via a sidebar link (label, href, section) | `components/docs/sidebar-nav.tsx` |
| `top_nav_link_clicked` | User clicks a top navigation link (label, href) | `components/docs/top-nav.tsx` |
| `theme_toggled` | User switches between light and dark theme | `components/docs/theme-toggle.tsx` |
| `graph_difficulty_filter_changed` | User changes the difficulty filter on the graph view | `components/graph/question-graph-view.tsx` |
| `graph_leetcode_filter_toggled` | User toggles the LeetCode-only filter on the graph | `components/graph/question-graph-view.tsx` |
| `graph_topic_filter_toggled` | User toggles a topic filter chip on the graph | `components/graph/question-graph-view.tsx` |
| `graph_view_reset` | User resets the graph zoom/pan to default | `components/graph/question-graph-view.tsx` |
| `graph_node_selected` | User clicks a node in the graph (node_id, node_label, node_kind) | `components/graph/question-graph-view.tsx` |
| `toc_link_clicked` | User clicks a heading in the table of contents (id, title, level) | `components/docs/toc-nav.tsx` ✨ new |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/101355/dashboard/1372054
- **Navigation Clicks Over Time**: https://us.posthog.com/project/101355/insights/qiNnScPF
- **Most Visited Sections**: https://us.posthog.com/project/101355/insights/0NNojBUr
- **Question Filter Usage**: https://us.posthog.com/project/101355/insights/fFOZ6jYG
- **Graph Feature Engagement**: https://us.posthog.com/project/101355/insights/y0dyyn4S
- **Theme Preference Distribution**: https://us.posthog.com/project/101355/insights/dUWVLCg9

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
