import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Standings from '../standings/Standings';
import Teams from '../teams/Teams';

const Routes = () => (
  <Switch>
    <Route exact path={`/`} />
    <Route exact path={`/standings`}>
      <Standings />
    </Route>
    <Route exact path={`/teams`}>
      <Teams />
    </Route>
  </Switch>
);

export default Routes;
