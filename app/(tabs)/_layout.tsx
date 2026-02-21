import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { useAuthStore } from '@/src/features/auth/store/useAuthStore';
import { ThemedText } from '@/src/components/ui/ThemedText';

export default function TabLayout() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: Platform.select({
          web: { display: 'none' },
          default: { display: 'flex' },
        }),
        headerStyle: {
          backgroundColor: '#151718',
        },
        headerTintColor: '#fff',

        headerLeft: () => (
          <View style={styles.userInfoContainer}>
            {user?.picture ? (
              <Image source={{ uri: user.picture }} style={styles.avatarMini} />
            ) : (
              <View style={[styles.avatarMini, styles.avatarPlaceholder]}>
                <ThemedText style={{ fontSize: 12 }}>{user?.full_name?.charAt(0)}</ThemedText>
              </View>
            )}
            <ThemedText style={styles.userNameText}>
              {user?.full_name?.split(' ')[0]}
            </ThemedText>
          </View>
        ),

        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <ThemedText style={styles.logoutText}>Salir</ThemedText>
          </TouchableOpacity>
        ),
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: '', 
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  avatarMini: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  avatarPlaceholder: {
    backgroundColor: '#2e7d32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
    color: '#fff',
  },
  logoutButton: {
    marginRight: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 68, 68, 0.15)',
  },
  logoutText: {
    color: '#ff4444',
    fontWeight: 'bold',
    fontSize: 13,
  },
});