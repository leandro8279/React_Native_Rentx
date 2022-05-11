import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = (selected?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background_secondary,
    },
    header: {
      width: "100%",
      height: RFValue(360),
      backgroundColor: colors.header,
      padding: 25,
      paddingTop: getStatusBarHeight() + 30,
    },
    title: {
      color: colors.shape,
      fontFamily: fonts.secondary_600,
      fontSize: RFValue(30),
      marginTop: 24,
    },
    rentalPeriod: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 32,
    },
    dateTitle: {
      color: colors.text,
      fontFamily: fonts.secondary_500,
      fontSize: RFValue(13),
    },
    dateValue: {
      color: colors.shape,
      fontFamily: fonts.secondary_500,
      fontSize: RFValue(18),
      borderBottomWidth: selected ? 1 : 0,
      borderBottomColor: selected ? colors.text : "transparent",
      paddingBottom: selected ? 5 : 0,
    },
    content: {
      padding: 24,
    },
    footer: {
      padding: 24,
    },
  });
