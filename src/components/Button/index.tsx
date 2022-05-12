import { colors } from "@global/theme";
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

type Props = {
  children: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  enabled?: boolean;
} & TouchableOpacityProps;
export function Button({
  children,
  color = colors.main,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={styles({ color, enabled, loading }).container}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} />
      ) : (
        <Text style={styles({ light }).title}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
