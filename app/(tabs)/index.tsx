import { StyleSheet } from 'react-native';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">¡Hola Mundo!</ThemedText>
      <ThemedText type="subtitle">Proyecto UniConnect - G1</ThemedText>
      <ThemedText style={styles.description}>
        Ingeniería de Software III - U. de Caldas
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  description: {
    marginTop: 10,
    color: '#808080',
  },
});