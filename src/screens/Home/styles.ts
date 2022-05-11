import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background_primary,
    },
    header: {
      width: "100%",
      height: 113,
      paddingTop: 42,
      paddingHorizontal: 24,
      backgroundColor: colors.header,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    totalCars: {
      fontSize: RFValue(16),
      fontFamily: fonts.primary_400,
      color: colors.text,
    },
  });
