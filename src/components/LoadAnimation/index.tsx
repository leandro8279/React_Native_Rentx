import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import loadingCar from "@assets/loadingCar.json";

import { styles } from "./styles";

export function LoadAnimation() {
  return (
    <View style={styles().container}>
      <LottieView
        source={loadingCar}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </View>
  );
}
