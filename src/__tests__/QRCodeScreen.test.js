import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import QRCodeScreen from '../screens/QRCodeScreen';

test('renders QR Code and user data', () => {
  // Simulez les données dans le store
  store.dispatch({ type: 'user/setUserInfo', payload: { name: 'Jean', firstName: 'Dupont' } });

  const { getByText } = render(
    <Provider store={store}>
      <QRCodeScreen />
    </Provider>
  );

  expect(getByText('Jean Dupont')).toBeTruthy();
});
