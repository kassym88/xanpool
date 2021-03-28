import {Octokit} from "@octokit/rest";

const octokit = new Octokit();

const GITHUB = {
  getRepos: (username: string) => octokit.rest.repos.listForUser({
    username
  }),
  getRepoContent: (owner: string, repo: string) => octokit.rest.repos.getContent({
    owner,
    repo,
    path: ''
  })
};

export default GITHUB;
