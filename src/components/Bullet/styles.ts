import { StyleSheet } from "react-native";
import { colors } from "@global/theme";

export const styles = (active?: boolean) =>
  StyleSheet.create({
    container: {
      width: 6,
      height: 6,
      marginLeft: 8,
      borderRadius: 3,
      backgroundColor: active ? colors.title : colors.shape,
    },
  });
