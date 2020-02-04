import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexPage } from './containers/index/index';

const Router = () => (
  <Switch>
    <Route path="/">
      <IndexPage />
    </Route>
  </Switch>
);

export {
  Router
};