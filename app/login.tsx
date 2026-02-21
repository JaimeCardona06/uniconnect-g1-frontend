import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/src/components/ThemedView';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { GoogleLoginButton } from '../src/features/auth/components/GoogleLoginButton';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Bienvenido a UniConnect
      </ThemedText>
      
      <GoogleLoginButton />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
});