import { Dimensions, StyleSheet } from "react-native";
import { colors } from "@global/theme";

export const styles = (active?: boolean) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    imageIndexes: {
      flexDirection: "row",
      alignSelf: "flex-end",
      paddingRight: 24,
    },
    imageIndex: {
      width: 8,
      height: 8,
      marginLeft: 8,
      borderRadius: 4,
      backgroundColor: active ? colors.title : colors.shape,
    },
    carImageWrapper: {
      width: Dimensions.get("window").width,
      height: 132,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 280,
      height: 132,
      resizeMode: "contain",
    },
  });
