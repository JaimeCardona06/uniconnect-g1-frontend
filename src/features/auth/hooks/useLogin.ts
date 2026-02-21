import { useMutation } from '@tanstack/react-query';
import { authService } from '../services/auth.service';
import { useAuthStore } from '../store/useAuthStore';
import { Alert } from 'react-native';

export function useLogin() {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: authService.loginWithGoogle,
    
    onSuccess: (data) => {
      setToken(data.tokenApp); 
      Alert.alert("¡Éxito!", "Sesión iniciada correctamente");
    },
    
    onError: (error) => {
      Alert.alert("Error", "No se pudo conectar con el servidor");
      console.error(error);
    }
  });
}