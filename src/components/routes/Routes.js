import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Standings from '../standings/Standings';

const Routes = () => (
  <Switch>
    <Route exact path={`/`} />
    <Route exact path={`/standings`}>
      <Standings />
    </Route>
  </Switch>
);

export default Routes;
