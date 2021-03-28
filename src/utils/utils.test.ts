import {withParams} from "./utils";
import {ROUTES} from "../routes";

describe('utils', () => {
  const reposUrl = '/repos/testName';
  const contentUrl = `${reposUrl}/content/testRepo`;

  it('should input 1 parameter into url', () => {
    expect(withParams(ROUTES.REPOS, [{name: 'userName', val: 'testName'}])).toBe(reposUrl);
  });

  it('should input 2 parameter into url', () => {
    expect(withParams(ROUTES.CONTENT, [{name: 'userName', val: 'testName'}, {name: 'repo', val: 'testRepo'}])).toBe(contentUrl);
  });
});
