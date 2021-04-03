import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import UnauthModal from '../../features/auth/UnauthModal';

export default function PrivateRoute({
  component: Component,
  prevLocation,
  ...res
}) {
  const { authenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...res}
      render={(props) =>
        authenticated ? <Component {...props} /> : <UnauthModal {...props} />
      }
    />
  );
}
