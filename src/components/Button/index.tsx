import React from "react";
import { colors } from "@global/theme";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

import { styles } from "./styles";

type Props = {
  children: string;
  color?: string;
  loading?: boolean;
  enabled: boolean;
  light?: boolean;
  onPress: () => void;
};
export function Button({
  children,
  color = colors.main,
  enabled = true,
  loading = false,
  light = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles({ color, enabled, loading }).container}
      disabled={!enabled}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Text style={styles({ light }).title}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
