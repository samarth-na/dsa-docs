export function toPublicPath(href: string): string {
  if (!href.startsWith("/docs")) return href;

  if (href === "/docs" || href === "/docs/") return "/";
  if (href.startsWith("/docs/questions_by_type")) return href.replace("/docs/questions_by_type", "/questions_by_type");
  if (href.startsWith("/docs/question_catalog")) return href.replace("/docs/question_catalog", "/question_catalog");
  if (href.startsWith("/docs/leetcode_questions")) return href.replace("/docs/leetcode_questions", "/leetcode_questions");
  if (href.startsWith("/docs/patterns_questions")) return href.replace("/docs/patterns_questions", "/patterns_questions");
  if (href.startsWith("/docs/master_index")) return href.replace("/docs/master_index", "/master_index");
  if (href.startsWith("/docs/leetcode_study_plan")) return href.replace("/docs/leetcode_study_plan", "/leetcode_study_plan");
  if (href.startsWith("/docs/roadmap")) return href.replace("/docs/roadmap", "/roadmap");
  if (href.startsWith("/docs/questions")) return href.replace("/docs/questions", "/questions");
  if (href.startsWith("/docs/lectures")) return href.replace("/docs/lectures", "/lectures");
  if (href.startsWith("/docs/topics")) return href.replace("/docs/topics", "/topics");
  if (href.startsWith("/docs/lists")) return href.replace("/docs/lists", "/lists");
  if (href.startsWith("/docs/planning")) return href.replace("/docs/planning", "/planning");
  if (href.startsWith("/docs/graph")) return href.replace("/docs/graph", "/graph");

  return href;
}
