<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DSA Docs project. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side via the Next.js instrumentation hook. Uses a `/ingest` reverse proxy, enables automatic exception capture, and activates debug mode in development.
- **`next.config.ts`** (updated): Added PostHog reverse proxy rewrites (`/ingest/static/*` and `/ingest/*`) and `skipTrailingSlashRedirect: true` to support PostHog's API request format.
- **`.env.local`** (created): PostHog public token and host set as environment variables.
- **`components/docs/sidebar-nav.tsx`** (updated): Added `question_filter_applied` (on question type filter click) and `sidebar_link_clicked` (on doc link navigation).
- **`components/docs/top-nav.tsx`** (updated): Added `"use client"` directive and `top_nav_link_clicked` on top navigation link clicks.
- **`components/docs/theme-toggle.tsx`** (updated): Added `theme_toggled` event with `theme` property when user switches between dark and light mode.
- **`components/graph/question-graph-view.tsx`** (updated): Added five events covering all major user interactions in the graph view.

| Event | Description | File |
|-------|-------------|------|
| `question_filter_applied` | Fired when user clicks a question type filter in the sidebar. Includes `filter` property. | `components/docs/sidebar-nav.tsx` |
| `sidebar_link_clicked` | Fired when user navigates to a doc page via sidebar. Includes `label`, `href`, `section`. | `components/docs/sidebar-nav.tsx` |
| `top_nav_link_clicked` | Fired when user clicks a top navigation link (Questions, Lectures, Topics, Lists, Graph). Includes `label`, `href`. | `components/docs/top-nav.tsx` |
| `theme_toggled` | Fired when user switches between dark and light themes. Includes `theme` (next value). | `components/docs/theme-toggle.tsx` |
| `graph_difficulty_filter_changed` | Fired when user changes the difficulty filter in the graph view. Includes `difficulty`. | `components/graph/question-graph-view.tsx` |
| `graph_leetcode_filter_toggled` | Fired when user enables or disables the LeetCode-only filter. Includes `enabled`. | `components/graph/question-graph-view.tsx` |
| `graph_topic_filter_toggled` | Fired when user enables or disables a topic filter chip. Includes `topic`, `enabled`. | `components/graph/question-graph-view.tsx` |
| `graph_node_selected` | Fired when user clicks a node in the graph to inspect it. Includes `node_id`, `node_label`, `node_kind`. | `components/graph/question-graph-view.tsx` |
| `graph_view_reset` | Fired when user resets the graph zoom/pan to defaults. | `components/graph/question-graph-view.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/101355/dashboard/1371998)
- **Insight**: [Navigation clicks (sidebar + top nav)](https://us.posthog.com/project/101355/insights/jcqURyoA)
- **Insight**: [Question filter usage by category](https://us.posthog.com/project/101355/insights/wzwVPbKI)
- **Insight**: [Graph view engagement (node selection + filters)](https://us.posthog.com/project/101355/insights/7xJUTHfG)
- **Insight**: [Theme preference (dark vs light)](https://us.posthog.com/project/101355/insights/MAp3rf1Y)
- **Insight**: [Daily active users (total engagement)](https://us.posthog.com/project/101355/insights/OiUdmwtd)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
