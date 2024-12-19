import React from 'react';
import { render } from '@testing-library/react-native';
import QRCodeScreen from '../screens/QRCodeScreen';
import { Provider } from 'react-redux';
import store from '../redux/store';

const renderComponent = () =>
  render(
    <Provider store={store}>
      <QRCodeScreen />
    </Provider>
  );

test('Rend le QR Code et les données utilisateur', () => {
  const { getByText } = renderComponent();
  // Supposons que les données utilisateur soient déjà dans le store
  store.dispatch({ type: 'user/setUserInfo', payload: { name: 'Jean', firstName: 'Dupont' } });

  expect(getByText('Jean Dupont')).toBeTruthy();
});
