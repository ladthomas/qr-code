import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useNavigation } from '@react-navigation/native';

// Mock de la navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Tests unitaires pour MainScreen', () => {
  test('Snapshot de MainScreen', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('Le composant MainScreen est bien rendu', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
    expect(getByText('Nom')).toBeTruthy();
  });

  test('Les champs de saisie pour nom et prénom existent', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
    expect(getByPlaceholderText('Entrez votre nom')).toBeTruthy();
    expect(getByPlaceholderText('Entrez votre prénom')).toBeTruthy();
  });

  test('Le bouton permettant de générer un QR Code existe', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
    expect(getByText('Générer un QR Code')).toBeTruthy();
  });

  test('La navigation vers l’écran QRCode est appelée une fois lors du clic sur le bouton', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );

    // Simule la saisie dans les champs
    fireEvent.changeText(getByPlaceholderText('Entrez votre nom'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Entrez votre prénom'), 'John');

    // Simule le clic sur le bouton
    fireEvent.press(getByText('Générer un QR Code'));

    // Vérifie si la navigation a été appelée
    expect(navigate).toHaveBeenCalledWith('QRCode');
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
