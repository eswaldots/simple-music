import "react-native-gesture-handler";
import "./global.css";
import { Stack } from "expo-router";
import React from "react";
import { GlobalProvider } from "./Hooks/actualSong";
// Enrutador principal
export default function RootLayout() {
  return (
    <>
      <GlobalProvider>
        <Stack initialRouteName="assets/Tracks" detachInactiveScreens={false} screenOptions={{ headerShown: false, }}>
        <Stack.Screen
            // Pantalla principal
            name="index"
            options={{
              gestureEnabled: true,
              gestureDirection: 'vertical',
              headerShown: false,
              animationDuration: 400,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push',
            }}
          />
          <Stack.Screen
            name="(Songs)/[id]"
            options={{
              gestureEnabled: true,
              gestureDirection: 'vertical',
              headerShown: false,
              animationDuration: 400,
              presentation: 'cardModal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push'
            }}
          />
        <Stack.Screen
            // Pantalla para crear canciones
            name="createSong/createSong"
            options={{
              gestureEnabled: true,
              gestureDirection: 'vertical',
              headerShown: false,
              animationDuration: 400,
              presentation: 'cardModal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push',
            }}
          />
          <Stack.Screen
            name="(Next)/[id]"
            options={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerShown: false,
              animationDuration: 250,
              presentation: 'cardModal',
              animation: 'slide_from_right',
              animationTypeForReplace: 'push'
            }}
          />
          <Stack.Screen
            name="(Back)/[id]"
            options={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerShown: false,
              animationDuration: 250,
              presentation: 'cardModal',
              animation: 'slide_from_left',
              animationTypeForReplace: 'push',
            }}
          />
        </Stack>
      </GlobalProvider>
    </>
  );
}
