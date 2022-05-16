import { Feather } from "@expo/vector-icons";
import { colors } from "@global/theme";
import React, { useState } from "react";
import { View, Text, TextInputProps, TextInput, Pressable } from "react-native";

import { styles } from "./styles";

type Props = {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
} & TextInputProps;
export function PasswordInput({ iconName, value, ...props }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <View style={styles().container}>
      <View style={styles(isFocused).icon}>
        <Feather
          name={iconName}
          size={22}
          color={isFocused || isFilled ? colors.main : colors.text_detail}
        />
      </View>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        autoCorrect={false}
        value={value}
        style={styles(isFocused).input}
        {...props}
      />
      <Pressable onPress={handlePasswordVisibilityChange}>
        <View style={styles(isFocused).icon}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color={colors.text_detail}
          />
        </View>
      </Pressable>
    </View>
  );
}
