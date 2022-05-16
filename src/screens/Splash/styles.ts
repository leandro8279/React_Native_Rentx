import { StyleSheet } from "react-native";
import { colors } from "@global/theme";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.header,
    },
  });
