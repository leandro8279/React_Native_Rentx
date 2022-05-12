import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  imagesUrl: string[];
};
export function ImageSlider({ imagesUrl }: Props) {
  return (
    <View style={styles().container}>
      <View style={styles().imageIndexes}>
        <View style={styles(true).imageIndex} />
        <View style={styles(false).imageIndex} />
        <View style={styles(false).imageIndex} />
        <View style={styles(false).imageIndex} />
      </View>

      <View style={styles().carImageWrapper}>
        <Image source={{ uri: imagesUrl[0] }} style={styles().image} />
      </View>
    </View>
  );
}
