import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useLogin } from "../hooks/useLogin";
import { Button, View, ActivityIndicator } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export function GoogleLoginButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID, 
    androidClientId: "PENDIENTE", 
  });

  const loginMutation = useLogin();

  useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;
      if (accessToken) {
        loginMutation.mutate(accessToken); 
      }
    }
  }, [response]);

  return (
    <View style={{ marginTop: 20 }}>
      {loginMutation.isPending ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          title="Ingresar con Google"
          disabled={!request}
          onPress={() => promptAsync()}
        />
      )}
    </View>
  );
}