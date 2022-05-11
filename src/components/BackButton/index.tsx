import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@global/theme";
type Props = {
  color?: string;
  onPress: () => void;
};
export default function BackButton({ color, onPress }: Props) {
  return (
    <BorderlessButton onPress={() => alert("ola")}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : colors.text}
      />
    </BorderlessButton>
  );
}
