import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

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
      marginTop: getStatusBarHeight() + 20,
      marginLeft: 24,
    },
    carImage: {
      marginTop: getStatusBarHeight() + 32,
    },
    content: {
      paddingHorizontal: 24,
      paddingTop: getStatusBarHeight(),
    },
    details: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
    },
    brand: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(13),
      textTransform: "uppercase",
    },
    name: {
      fontFamily: fonts.secondary_500,
      color: colors.title,
      fontSize: RFValue(23),
    },
    period: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(13),
      textTransform: "uppercase",
    },
    price: {
      fontFamily: fonts.secondary_500,
      color: colors.main,
      fontSize: RFValue(23),
    },
    accessories: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 16,
    },
    about: {
      fontFamily: fonts.primary_400,
      color: colors.text,
      fontSize: RFValue(15),
      textAlign: "justify",
      marginTop: 23,
      lineHeight: RFValue(23),
    },
    footer: {
      width: "100%",
      paddingTop: 24,
      paddingHorizontal: 24,
      paddingBottom: getBottomSpace() + 24,
      backgroundColor: colors.background_secondary,
    },
  });
