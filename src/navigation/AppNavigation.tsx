import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import { Home } from "@screens/Home";
import { CarDetails } from "@screens/CarDetails";
import { Scheduling } from "@screens/Scheduling";
import { SchedulingDetails } from "@screens/SchedulingDetails";
import { Confirmation } from "@screens/Confirmation";

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>();
export function AppNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
