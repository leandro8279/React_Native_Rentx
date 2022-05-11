import React from "react";
import { View, Text } from "react-native";
import { BackButton } from "@components/index";

import { styles } from "./styles";
export default function CarDetails() {
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <BackButton onPress={() => {}} />
      </View>
    </View>
  );
}
