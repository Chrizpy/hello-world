export interface PullRequest {
  url: string;
  html_url: string;
  merged_at: string;
}

export interface GitHubData {
  url: string;
  repository_url: string;
  title: string;
  state: string;
  pull_request: PullRequest;
}

export const GitHubUsername = Deno.env.get("GITHUB_USERNAME") ?? "Chrizpy";
