import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/", destination: "/docs" },
      { source: "/questions", destination: "/docs/questions" },
      { source: "/questions/:path*", destination: "/docs/questions/:path*" },
      { source: "/questions_by_type", destination: "/docs/questions_by_type" },
      { source: "/question_catalog", destination: "/docs/question_catalog" },
      { source: "/leetcode_questions", destination: "/docs/leetcode_questions" },
      { source: "/patterns_questions", destination: "/docs/patterns_questions" },
      { source: "/master_index", destination: "/docs/master_index" },
      { source: "/leetcode_study_plan", destination: "/docs/leetcode_study_plan" },
      { source: "/roadmap", destination: "/docs/roadmap" },
      { source: "/lectures", destination: "/docs/lectures" },
      { source: "/lectures/:path*", destination: "/docs/lectures/:path*" },
      { source: "/topics", destination: "/docs/topics" },
      { source: "/topics/:path*", destination: "/docs/topics/:path*" },
      { source: "/lists", destination: "/docs/lists" },
      { source: "/lists/:path*", destination: "/docs/lists/:path*" },
      { source: "/planning", destination: "/docs/planning" },
      { source: "/planning/:path*", destination: "/docs/planning/:path*" },
      { source: "/graph", destination: "/docs/graph" }
    ];
  }
};

export default nextConfig;
