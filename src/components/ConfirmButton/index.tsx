import React from "react";
import { Text } from "react-native";
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = {
  children: string;
} & RectButtonProps;
export function ConfirmButton({ children, ...rest }: Props) {
  return (
    <RectButton style={styles().container} {...rest}>
      <Text style={styles().title}>{children}</Text>
    </RectButton>
  );
}
