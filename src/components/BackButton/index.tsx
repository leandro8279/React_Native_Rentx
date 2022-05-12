import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@global/theme";

type Props = {
  color?: string;
  onPress: () => void;
};
export default function BackButton({ color, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color || colors.text}
      />
    </TouchableOpacity>
  );
}
