import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background_primary,
    },
    header: {
      width: "100%",
      height: 360,
      backgroundColor: colors.header,
      justifyContent: "center",
      padding: 25,
      paddingTop: getStatusBarHeight() + 30,
    },
    title: {
      fontSize: RFValue(28),
      color: colors.shape,
      fontFamily: fonts.secondary_600,
      marginTop: 24,
    },
    subTitle: {
      fontSize: RFValue(14),
      color: colors.shape,
      fontFamily: fonts.secondary_400,
      marginTop: 24,
    },
    content: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 16,
    },
    appointments: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 24,
    },
    appointmentsTitle: {
      fontSize: RFValue(14),
      color: colors.text,
      fontFamily: fonts.primary_400,
    },
    appointmentsQuantity: {
      fontSize: RFValue(14),
      color: colors.title,
      fontFamily: fonts.primary_500,
    },
    carWrapper: {
      margin: 16,
    },
    carFooter: {
      width: "100%",
      padding: 12,
      marginTop: -10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.background_secondary,
    },
    carFooterTitle: {
      fontSize: RFValue(10),
      color: colors.text_detail,
      fontFamily: fonts.secondary_500,
    },
    carFooterPeriod: { flexDirection: "row" },
    carFooterDate: {
      fontSize: RFValue(12),
      color: colors.title,
      fontFamily: fonts.primary_400,
    },
  });
