import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background_secondary,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      marginTop: getStatusBarHeight() + 18,
      marginLeft: 24,
    },
  });
