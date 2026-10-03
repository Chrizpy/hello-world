import IconInfoSquare from "@tabler/icons-preact/dist/esm/icons/IconInfoSquare.mjs";

import { GitHubData, GitHubUsername, PullRequest } from "../utils/GitHub.ts";
import Page from "../components/Page.tsx";
import PullRequestItem from "../components/PullRequestItem.tsx";
import Title from "../components/Title.tsx";

interface GitHubSearchResponse {
  items?: GitHubData[];
  message?: string;
}

interface PullRequestSearchResult {
  items: GitHubData[];
  errorMessage?: string;
}

async function getPullRequests(): Promise<PullRequestSearchResult> {
  const url = new URL("https://api.github.com/search/issues");
  url.search = new URLSearchParams({
    q: `is:pr author:${GitHubUsername} archived:false is:public -user:${GitHubUsername}`,
    per_page: "100",
    page: "1",
  }).toString();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  let resp: Response;
  try {
    resp = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Chrizpy-hello-world",
      },
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        items: [],
        errorMessage:
          "GitHub request timed out. Please refresh the page and try again.",
      };
    }

    return {
      items: [],
      errorMessage:
        "GitHub is temporarily unavailable. Please try again in a moment.",
    };
  } finally {
    clearTimeout(timeout);
  }

  const pullRequestItems = await resp.json() as GitHubSearchResponse;

  if (!resp.ok) {
    return {
      items: [],
      errorMessage: `GitHub pull request search failed (${resp.status}): ${
        pullRequestItems.message ?? resp.statusText
      }`,
    };
  }

  if (!Array.isArray(pullRequestItems.items)) {
    return {
      items: [],
      errorMessage:
        "GitHub pull request search returned an unexpected response shape.",
    };
  }

  return {
    items: pullRequestItems.items.map((item): GitHubData => {
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
    }),
  };
}

export default async function OpenSource() {
  const { items: pullRequests, errorMessage } = await getPullRequests();

  return (
    <>
      <Page>
        <Title headerStyle="h1">
          Open source!
        </Title>

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

        {errorMessage && (
          <p class="mb-5 rounded border border-yellow-700 bg-yellow-100 p-3 text-yellow-900">
            {errorMessage}
          </p>
        )}

        {!errorMessage && pullRequests.length === 0 && (
          <p class="mb-5">No public pull requests found right now.</p>
        )}

        {pullRequests.map((githubData: GitHubData) => (
          <PullRequestItem GitHubData={githubData} />
        ))}
      </Page>
    </>
  );
}
