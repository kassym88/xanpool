import React from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import GITHUB from "../../api/github";
import {withParams} from "../../utils/utils";
import {ROUTES} from "../../routes";

const ReposPage: React.FC = () => {
  const { userName } = useParams<{userName: string}>();
  const [repos, setRepos] = React.useState<any[]>([]);
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    GITHUB.getRepos(userName)
      // TODO need to find data type here if it is exists in Octokit library
      .then(({data}) => setRepos(data))
      .catch(() => setError(true))
      .finally(() => setReady(true));
  }, [userName]);

  if (!ready) {
    return <div data-testid="ReposPage">Loading ...</div>;
  }

  if (error) {
    return <div data-testid="ReposPage">User not found</div>;
  }

  if (!repos.length) {
    return <div data-testid="ReposPage">No repositories found</div>;
  }

  return (
    <ul data-testid="ReposPage">{
      repos.map(repo => <li key={repo.name}><Link to={withParams(ROUTES.CONTENT, [{name: 'userName', val: userName}, {name: 'repo', val: repo.name}])}>{repo.name}</Link></li>)
    }</ul>
  );
};

export default ReposPage;
