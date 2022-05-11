import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      width: RFValue(110),
      height: RFValue(92),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background_primary,
      padding: 12,
      marginBottom: 8,
    },
    title: {
      fontFamily: fonts.primary_500,
      color: colors.text,
      fontSize: RFValue(12),
    },
  });
