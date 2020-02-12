import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Standings from '../standings/Standings';
import Teams from '../teams/Teams';
import Team from '../team/Team';

const Routes = () => (
  <Switch>
    <Route exact path={`/`} />
    <Route exact path={`/standings`}>
      <Standings />
    </Route>
    <Route exact path={`/teams`}>
      <Teams />
    </Route>
    <Route exact path={`/teams/:team`} component={Team} />
  </Switch>
);

export default Routes;
