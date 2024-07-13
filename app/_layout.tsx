import "react-native-gesture-handler";
import "./global.css";
import {
  DrawerLayout,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Navigator, Slot, Stack } from "expo-router";
import { View, Text } from "react-native";
import Menu from "./Menu";
import React, { Component } from "react";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import { DrawerContent, DrawerView } from "@react-navigation/drawer";
import { Route } from "expo-router/build/Route";
import { GlobalProvider } from "./Hooks/actualSong";
import { TransitionPresets, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
// Enrutador principal
export default function RootLayout() {
  return (
    <>
      <GlobalProvider>
        <Stack initialRouteName="createsong/createSong" detachInactiveScreens={false} screenOptions={{ headerShown: false, }}>
        <Stack.Screen
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
            name="createSong/createSong"
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
            name="createSong/upload"
            options={{
              gestureEnabled: true,
              gestureDirection: 'vertical',
              gestureResponseDistance: { vertical: 10 },
              headerShown: false,
              animationDuration: 400,
              presentation: 'modal',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'push',}}
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
