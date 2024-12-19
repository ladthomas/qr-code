import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainScreen from '../screens/MainScreen';

describe('MainScreen', () => {
  it('renders input fields and button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );

    expect(getByPlaceholderText('Entrez votre nom')).toBeTruthy();
    expect(getByPlaceholderText('Entrez votre prénom')).toBeTruthy();
    expect(getByText('Générer un QR Code')).toBeTruthy();
  });

  it('navigates to QRCode screen on valid input', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText('Entrez votre nom'), 'Jean');
    fireEvent.changeText(getByPlaceholderText('Entrez votre prénom'), 'Dupont');
    fireEvent.press(getByText('Générer un QR Code'));

    // Vérifiez si la navigation est correctement appelée
    // (Utilisez un mock pour `useNavigation` si nécessaire)
  });
});
