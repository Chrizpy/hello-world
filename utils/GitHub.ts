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

const user = Deno.env.get("USER");

export const GitHubAPIQuery =
  `%20is:pull-request%20author:${user}%20archived:false%20is:public%20-user:${user}&per_page=100&page=1`;
