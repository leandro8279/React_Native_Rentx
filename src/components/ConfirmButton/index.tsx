import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = {
  children: string;
} & TouchableOpacityProps;
export function ConfirmButton({ children, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles().container} {...rest}>
      <Text style={styles().title}>{children}</Text>
    </TouchableOpacity>
  );
}
