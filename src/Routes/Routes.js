import React from 'react';
import { Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/alpha',
    main: () => <h2>Alpha</h2>,
  },
  {
    path: '/beta',
    main: () => <h2>Beta</h2>,
  },
  {
    path: '/gamma',
    main: () => <h2>Gamma</h2>,
  },
  {
    path: '/delta',
    main: () => <h2>Delta</h2>,
  },
];

const Routes = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1, padding: '10px' }}>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
);

export default Routes;
