import React, { useState } from "react";
import { View, TextInputProps, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "@global/theme";
import { styles } from "./styles";

type Props = {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
} & TextInputProps;
export function Input({ iconName, value, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };
  return (
    <View style={styles().container}>
      <View style={styles(isFocused).left}>
        <Feather
          name={iconName}
          size={22}
          color={isFocused || isFilled ? colors.main : colors.text_detail}
        />
      </View>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        style={styles(isFocused).input}
        {...props}
      />
    </View>
  );
}
