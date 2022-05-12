import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "@global/theme";

import { styles } from "./styles";

export function Load() {
  return (
    <ActivityIndicator
      color={colors.main}
      size="large"
      style={styles().container}
    />
  );
}
