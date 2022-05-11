import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/theme";
export const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 126,
      backgroundColor: colors.background_secondary,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 24,
      marginBottom: 16,
    },
    brand: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(12),
      textTransform: "uppercase",
    },
    name: {
      fontFamily: fonts.secondary_500,
      color: colors.title,
      fontSize: RFValue(13),
    },
    about: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 15,
    },
    rent: {
      marginRight: 22,
    },
    period: {
      fontFamily: fonts.secondary_500,
      color: colors.text_detail,
      fontSize: RFValue(12),
      textTransform: "uppercase",
    },
    price: {
      fontFamily: fonts.secondary_500,
      color: colors.main,
      fontSize: RFValue(16),
    },

    type: {
      marginTop: 8,
    },
    carImage: {
      width: 167,
      height: 85,
      resizeMode: "contain",
    },
  });
