import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './contexts/AppContext';

import Routes from './routes';

function App(): JSX.Element {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
