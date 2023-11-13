import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserCtxt } from './context/UserContext.jsx';
import { AppRouter } from './routers/App.routers.jsx';
import { AuthCtxt } from './context/AuthContext.jsx';
import { MovieCtxt } from './context/MovieContext.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { SocketProvider } from './context/SocketProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SocketProvider>
      <AuthCtxt>
        <UserCtxt>
          <MovieCtxt>
            <AppRouter>
              <App />
            </AppRouter>
          </MovieCtxt>
        </UserCtxt>
      </AuthCtxt>
    </SocketProvider>
  </AuthProvider>
);
