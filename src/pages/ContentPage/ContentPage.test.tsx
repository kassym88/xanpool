import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentPage from './ContentPage';
import {withParams} from "../../utils/utils";
import {ROUTES} from "../../routes";

describe('<ContentPage />', () => {
  test('it should mount', () => {
    const history = createMemoryHistory();
    const route = withParams(ROUTES.CONTENT, [{name: 'userName', val: 'test'}, {name: 'repo', val: 'test'}]);
    history.push(route);

    render(
      <Router history={history}>
        <ContentPage />
      </Router>);
    
    const filesPage = screen.getByTestId('FilesPage');

    expect(filesPage).toBeInTheDocument();
  });
});
