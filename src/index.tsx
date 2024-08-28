import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import HttpClient from './network/http';
import { AuthErrorEventBus, AuthProvider } from './context/AuthContext';
import AuthService from './service/auth';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL as string);
const authService = new AuthService(httpClient);
const authErrorEventBus = new AuthErrorEventBus();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <AuthProvider authService={authService} authErrorEventBus={authErrorEventBus}>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
