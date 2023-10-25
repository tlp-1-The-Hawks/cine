import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Context } from './context/UserContext.jsx';
import { AppRouter } from './routers/App.routers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <AppRouter>
      <App />
    </AppRouter>
  </Context>
);
