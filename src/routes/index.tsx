import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" isCompact component={Cart} />
    </Switch>
  );
};

export default Routes;
