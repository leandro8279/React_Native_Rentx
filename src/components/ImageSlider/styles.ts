import { Dimensions, StyleSheet } from "react-native";

export const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    imageIndexes: {
      flexDirection: "row",
      alignSelf: "flex-end",
      paddingRight: 24,
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
