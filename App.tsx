import React from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "@utils/loadFonts";
import { LogBox } from "react-native";
import { RootNavigation } from "@navigation/index";

LogBox.ignoreAllLogs(true);
export default function App() {
  if (!loadFonts()) {
    return <AppLoading />;
  }
  return <RootNavigation />;
}
