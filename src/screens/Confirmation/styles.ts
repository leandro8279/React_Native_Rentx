import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.header,
      justifyContent: "center",
    },
    content: {
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: RFValue(50),
    },
    title: {
      fontFamily: fonts.secondary_600,
      color: colors.shape,
      fontSize: RFValue(30),
      marginTop: RFValue(20),
    },
    subTitle: {
      fontFamily: fonts.primary_400,
      color: colors.text_detail,
      fontSize: RFValue(15),
      marginTop: 16,
      lineHeight: RFValue(23),
      textAlign: "center",
    },
    footer: {
      width: "100%",
      alignItems: "center",
    },
  });
