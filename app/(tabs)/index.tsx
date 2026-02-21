import { StyleSheet } from 'react-native';
import { ThemedText } from '@/src/components/ui/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { useAuthStore } from '@/src/features/auth/store/useAuthStore';

export default function HomeScreen() {
  const user = useAuthStore((state) => state.user);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">
        ¡Hola, {user?.full_name?.split(' ')[0] || 'Usuario'}!
      </ThemedText>
      
      <ThemedText type="subtitle" style={styles.subtitle}>
        Proyecto UniConnect - G1
      </ThemedText>
      
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
  subtitle: {
    marginTop: 5,
  },
  description: {
    marginTop: 15,
    color: '#808080',
    textAlign: 'center',
    fontSize: 16,
  },
});