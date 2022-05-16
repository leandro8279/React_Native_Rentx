import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: colors.background_primary,
    },
    header: {
      width: "100%",
      marginTop: getStatusBarHeight() + 116,
    },
    title: {
      fontSize: RFValue(40),
      fontFamily: fonts.secondary_600,
      color: colors.title,
    },
    subTitle: {
      marginTop: 16,
      fontSize: RFValue(18),
      fontFamily: fonts.primary_400,
      color: colors.text,
      lineHeight: RFValue(25),
    },
    footer: {
      width: "100%",
    },
  });
