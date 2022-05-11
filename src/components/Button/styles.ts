import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/theme";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  color?: string;
  light?: boolean;
  enabled?: boolean;
  loading?: boolean;
};
export const styles = (props?: Props) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 19,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props?.color,
      opacity: props?.enabled === false || props?.loading === true ? 0.5 : 1,
      borderRadius: 8,
    },
    title: {
      fontSize: RFValue(15),
      color: props?.light ? colors.header : colors.shape,
      fontFamily: fonts.primary_500,
    },
  });
