import React, { useRef, useState } from "react";
import { View, Image, ViewToken, FlatList } from "react-native";

import { styles } from "./styles";

type Props = {
  imagesUrl: string[];
};
type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};
export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });
  return (
    <View style={styles().container}>
      <View style={styles().imageIndexes}>
        {imagesUrl.map((_, index) => (
          <View
            key={String(index)}
            style={styles(index === imageIndex).imageIndex}
          />
        ))}
      </View>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <View style={styles().carImageWrapper}>
            <Image source={{ uri: item }} style={styles().image} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </View>
  );
}
