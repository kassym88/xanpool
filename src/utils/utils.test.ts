import {withParams} from "./utils";
import {ROUTES} from "../routes";

describe('utils', () => {
  const reposUrl = '/repos/testName';
  const contentUrl = `${reposUrl}/content/testRepo`;

  it('should input 1 parameter into url', () => {
    expect(withParams(ROUTES.REPOS, {userName: 'testName'})).toBe(reposUrl);
  });

  it('should input 2 parameter into url', () => {
    expect(withParams(ROUTES.CONTENT, {userName: 'testName', repo: 'testRepo'})).toBe(contentUrl);
  });
});
