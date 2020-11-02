import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import ThemeProvider from './ThemeProvider';

import CartProvider from './CartContext';
import ProductsProvider from './ProductsContext';

import { persistor, store } from '../store';
import NavbarProvider from './NavbarContext';

const AppContext: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProductsProvider>
          <CartProvider>
            <NavbarProvider>
              <ThemeProvider>{children}</ThemeProvider>
              <ToastContainer autoClose={1500} />
            </NavbarProvider>
          </CartProvider>
        </ProductsProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppContext;
