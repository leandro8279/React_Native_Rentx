/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { RootNavigation } from "@navigation/index";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import ignoreWarnings from "ignore-warnings";

export default function App() {
  ignoreWarnings("warn", ["ViewPropTypes", "[react-native-gesture-handler]"]);

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);
  const [appIsReady, setAppIsReady] = useState(true);
  const fonts = {
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  };
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync(fonts);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(false);
      }
    }

    prepare();
  }, []);
  if (appIsReady) {
    return null;
  }
  return <RootNavigation />;
}
