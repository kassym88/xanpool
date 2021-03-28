import React from 'react';
import {useParams} from "react-router";
import GITHUB from "../../api/github";
import {Table} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ReadmeContainer = styled.div`
  padding: 30px;
  max-width: 1200px;
`;

const ContentPage: React.FC = () => {
  const {userName, repo} = useParams<{userName: string, repo: string}>();
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [content, setContent] = React.useState<any>([]);
  const [readmeMD, setReadmeMD] = React.useState('');

  const loadReadme = React.useCallback((url: string) => {
    fetch(url)
      .then(res => res.text())
      .then(md => setReadmeMD(md));
  }, []);

  React.useEffect(() => {
    GITHUB
      .getRepoContent(userName, repo)
      // TODO need to find data type here if it is exists in Octokit library
      .then(({data}) => {
        setContent(data);
        const readMe: any= (data as []).find((item: any) => item.name === 'README.md');
        if (readMe) {
          loadReadme(readMe.download_url);
        }
      })
      .catch(() => setError(true))
      .finally(() => setReady(true))
  }, [userName, repo, loadReadme]);

  if (!ready) {
    return <div data-testid="FilesPage">Loading ...</div>
  }

  if (error) {
    return <div data-testid="FilesPage">Repository not found</div>
  }

  if (content.length === 0) {
    return <div data-testid="FilesPage">Repository is empty</div>
  }

  return (
    <div data-testid="FilesPage">
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th><th>Type</th><th>Size</th>
        </tr>
        </thead>
        <tbody>
        {
          content.map((item: any) =>
            <tr key={item.name}>
              <td>{item.name}</td><td>{item.type}</td><td>{item.size} bytes</td>
            </tr>
          )
        }
        </tbody>
      </Table>
      {
        readmeMD ?
          <ReadmeContainer>
            <p>README.md</p>
            <ReactMarkdown source={readmeMD}/>
          </ReadmeContainer>
          : null
      }

    </div>
  );
};

export default ContentPage;
