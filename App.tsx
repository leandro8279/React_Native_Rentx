import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "@utils/loadFonts";
import CarDetails from "@screens/CarDetails";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);
export default function App() {
  if (!loadFonts()) {
    return <AppLoading />;
  }
  return (
    <>
      <CarDetails />
    </>
  );
}
