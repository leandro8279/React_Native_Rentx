import { colors } from "@global/theme";
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = {
  children: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
} & RectButtonProps;
export function Button({
  children,
  color = colors.main,
  enabled = true,
  loading = false,
  light = false,
}: Props) {
  return (
    <RectButton
      style={styles({ color, enabled, loading }).container}
      enabled={enabled}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Text style={styles({ light }).title}>{children}</Text>
      )}
    </RectButton>
  );
}
