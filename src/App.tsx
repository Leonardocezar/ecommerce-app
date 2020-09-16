import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from './contexts/auth';
import {CartProvider} from './contexts/cart';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
