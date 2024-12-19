import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainScreen from '../screens/MainScreen';

test('renders input fields and button', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );

  expect(getByPlaceholderText('Entrez votre nom')).toBeTruthy();
  expect(getByPlaceholderText('Entrez votre prénom')).toBeTruthy();
  expect(getByText('Générer un QR Code')).toBeTruthy();
});
