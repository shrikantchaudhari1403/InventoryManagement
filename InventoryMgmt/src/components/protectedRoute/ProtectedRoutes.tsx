import React, { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
//import { useAuth } from './AuthProvider';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = stringToBoolean(window.localStorage.getItem('isAuthenticated'))
 
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};


export function stringToBoolean(str: string | null): boolean {
    return str?.toLowerCase() as unknown as boolean;
}

export default ProtectedRoute;