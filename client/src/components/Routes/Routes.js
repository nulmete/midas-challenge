import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Detect from '../Mutants/Detect/Detect';
import Upload from '../Mutants/Upload/Upload';
import UserMutants from '../Mutants/UserMutants/UserMutants';
import { detectRoute, uploadRoute, userMutantsRoute } from './allRoutes';

const Routes = () => (
  <Switch>
    <Route exact path={detectRoute} component={Detect} />
    <Route exact path={uploadRoute} component={Upload} />
    <Route exact path={userMutantsRoute} component={UserMutants} />
    {/* TODO: route not found? */}
  </Switch>
);

export default Routes;
