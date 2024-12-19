import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen() {
  const { name, firstName } = useSelector((state) => state.user);
  const qrData = `${name} ${firstName}`;

  return (
    <View style={styles.container}>
      <QRCode value={qrData} size={200} />
      <Text style={styles.text}>{qrData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 20, fontSize: 18 },
});
