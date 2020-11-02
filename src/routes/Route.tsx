import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

import Default from '../pages/_layouts/Default';

interface IRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  isCompact?: boolean;
}

const RouteWrapper: React.FC<IRouteProps> = ({
  component: Component,
  isCompact,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Default isCompact={isCompact}>
          <Component {...props} />
        </Default>
      )}
    />
  );
};

export default RouteWrapper;
