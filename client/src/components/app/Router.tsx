import * as React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

import { routes, Route as TRoute } from '@routes';

export const Router = () =>
  <BrowserRouter>
    <Routes />
    <Link to="/">home</Link>
    <Link to="/blog">blog</Link>
  </BrowserRouter>;

const Routes = () => {
  const map = ({ path, exact, component }:TRoute) =>
    <Route key={path} path={path} exact={exact} component={component} />;

  const items = routes.map(map);

  return <>{items}</>;
};
