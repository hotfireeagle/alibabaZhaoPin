import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexPage } from './containers/index/index';
import { Page404 } from './containers/404/index';

const Router = () => (
  <Switch>
    <Route path="/" exact={true}>
      <IndexPage />
    </Route>
    <Route path='*'>
      <Page404 />
    </Route>
  </Switch>
);

export {
  Router
};