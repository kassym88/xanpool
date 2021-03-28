import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import {ROUTES} from "./routes";
import SearchPage from "./pages/SearchPage/SearchPage";
import ReposPage from "./pages/ReposPage/ReposPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => (
  <AppContainer data-testid="App">
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={SearchPage}/>
        <Route exact path={ROUTES.REPOS} component={ReposPage}/>
        <Route exact path={ROUTES.CONTENT} component={ContentPage}/>
      </Switch>
    </Router>
  </AppContainer>
);

export default App;
