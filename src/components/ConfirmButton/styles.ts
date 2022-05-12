import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = () =>
  StyleSheet.create({
    container: {
      width: 80,
      height: 56,
      backgroundColor: colors.shape_dark,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontFamily: fonts.primary_500,
      fontSize: RFValue(13),
      color: colors.shape,
    },
  });
