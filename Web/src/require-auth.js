import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './hooks/auth';
import Layout from './components/layout';

export default function RequireAuth() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
