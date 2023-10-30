import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserCtxt } from './context/UserContext.jsx';
import { AppRouter } from './routers/App.routers.jsx';
import { AuthCtxt } from './context/AuthContext.jsx';
import { MovieCtxt } from './context/MovieContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthCtxt>
    <UserCtxt>
      <MovieCtxt>
        <AppRouter>
          <App />
        </AppRouter>
      </MovieCtxt>
    </UserCtxt>
  </AuthCtxt>
);
