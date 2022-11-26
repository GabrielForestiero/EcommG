import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import AuthProvider from './hooks/auth';
import RequireAuth from './require-auth';
import ListExample from './pages/list-example';
import Login from './pages/login';
import FormExample from './pages/form-example';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route exact="true" path="/" element={<ListExample />} />
            <Route exact="true" path="/new" element={<FormExample />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
