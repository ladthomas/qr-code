import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGenerate = () => {
    if (name && firstName) {
      dispatch(setUserInfo({ name, firstName }));
      navigation.navigate('QRCode');
    } else {
      alert('Veuillez remplir les deux champs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom</Text>
      <TextInput style={styles.input} onChangeText={setName} placeholder="Entrez votre nom" />
      <Text style={styles.label}>Prénom</Text>
      <TextInput style={styles.input} onChangeText={setFirstName} placeholder="Entrez votre prénom" />
      <Button title="Générer un QR Code" onPress={handleGenerate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});
