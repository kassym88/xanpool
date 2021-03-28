import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReposPage from './ReposPage';
import {withParams} from "../../utils/utils";
import {ROUTES} from "../../routes";

describe('<ReposPage />', () => {
  test('it should mount', () => {
    const history = createMemoryHistory();
    const route = withParams(ROUTES.REPOS, [{name: 'userName', val: 'test'}]);
    history.push(route);

    render(
      <Router history={history}>
        <ReposPage />
      </Router>);
    
    const reposPage = screen.getByTestId('ReposPage');

    expect(reposPage).toBeInTheDocument();
  });
});

