import IconGitPullRequest from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/git-pull-request.tsx";
import IconGitMerge from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/git-merge.tsx";

import { GitHubData } from "../utils/GitHub.ts";

function pullRequestIcon(state: string) {
  if (state === "open") return <IconGitPullRequest />;
  if (state === "closed") {
    return <IconGitMerge class="inline text-purple-500" />;
  }
}

export default function PullRequestItem(props: { GitHubData: GitHubData }) {
  const pr: GitHubData = props.GitHubData;

  return (
    <div class="bg-white border border-black rounded mb-5 p-3 transition ease-in-out hover:scale-105 font-sans">
      <a href={pr.pull_request.html_url} target="_blank">
        <div>
          <span>{pullRequestIcon(pr.state)}</span>{" "}
          <span class="text-gray-500">
            {pr.repository_url.replace("https://api.github.com/repos/", "")}
          </span>{" "}
          <span class="text-black">{pr.title}</span>
        </div>
      </a>
    </div>
  );
}
