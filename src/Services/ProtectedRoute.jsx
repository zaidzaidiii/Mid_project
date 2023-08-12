import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  if (isLoggedIn()) {
    return <Route element={<Component />} />;
  } else {
    // Redirect to the login page
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
