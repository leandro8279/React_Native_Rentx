import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = (isFocused?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      marginBottom: 8,
    },
    icon: {
      height: 56,
      width: 55,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 2,
      backgroundColor: colors.background_secondary,
      borderBottomWidth: isFocused ? 3 : 0,
      borderBottomColor: isFocused ? colors.main : "transparent",
    },
    input: {
      flex: 1,
      paddingHorizontal: 23,
      backgroundColor: colors.background_secondary,
      color: colors.text,
      fontFamily: fonts.primary_400,
      fontSize: RFValue(15),
      borderBottomWidth: isFocused ? 3 : 0,
      borderBottomColor: isFocused ? colors.main : "transparent",
    },
  });
