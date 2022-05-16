import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      backgroundColor: colors.background_primary,
    },
    header: {
      width: "100%",
      marginTop: getStatusBarHeight() + 31,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    steps: { flexDirection: "row", alignItems: "center" },
    title: {
      marginTop: 60,
      marginBottom: 16,
      fontSize: RFValue(38),
      fontFamily: fonts.secondary_600,
      color: colors.title,
    },
    subTitle: {
      fontSize: RFValue(16),
      fontFamily: fonts.primary_400,
      color: colors.text,
      lineHeight: RFValue(24),
    },
    form: {
      width: "100%",
      marginTop: 64,
      marginBottom: 16,
    },
    formTitle: {
      marginBottom: 24,
      fontSize: RFValue(20),
      fontFamily: fonts.secondary_600,
      color: colors.title,
    },
  });
