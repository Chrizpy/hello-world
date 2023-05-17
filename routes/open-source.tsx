import IconInfoSquare from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/info-square.tsx";

import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

import { GitHubAPIQuery, GitHubData, PullRequest } from "../utils/GitHub.ts";

export const handler: Handlers<GitHubData[]> = {
  async GET(_req, ctx) {
    const pullRequests = await getPullrequsts();
    return ctx.render(pullRequests);
  },
};

async function getPullrequsts(): Promise<GitHubData[]> {
  const resp: Response = await fetch(
    `https://api.github.com/search/issues?q=${GitHubAPIQuery}`,
  );
  const pull_request_items: { items: GitHubData[] } = await resp.json();

  return pull_request_items.items.map((item: GitHubData): GitHubData => {
    const pr_data: PullRequest = {
      url: item.pull_request.url,
      html_url: item.pull_request.html_url,
      merged_at: item.pull_request.merged_at,
    };

    return {
      url: item.url,
      repository_url: item.repository_url,
      title: item.title,
      state: item.state,
      pull_request: pr_data,
    };
  });
}

import Page from "../components/Page.tsx";
import PullRequestItem from "../components/PullRequestItem.tsx";

export default function OpenSource(props: PageProps<GitHubData[]>) {
  const pullRequests = props.data;

  return (
    <div>
      <Page>
        <div class="text-5xl lg:text-4xl sm:text-left sm:mt-5">
          <p>Open source!</p>
        </div>
        <div class="mb-3 mt-3 pt-3 pb-3 rounded bg-banner">
          <p class="mx-3">
            <span>
              <IconInfoSquare class="inline" />
            </span>
            <span>
              This page queries GitHub's API and serves all pull requests I have
              created that are in public repositories.
            </span>
          </p>
        </div>
        {pullRequests.map((githubData: GitHubData) => (
          <PullRequestItem GitHubData={githubData} />
        ))}
      </Page>
    </div>
  );
}
