import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    alert("Debes iniciar sesión para acceder a esta página.");
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
