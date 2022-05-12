import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import GasolineSvg from "@assets/gasoline.svg";
import { styles } from "./styles";

type CarData = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

type Props = {
  data: CarData;
  onPress: () => void;
};
export default function Card({ data, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles().container}
    >
      <View>
        <Text style={styles().brand}>{data.brand}</Text>
        <Text style={styles().name}>{data.name}</Text>

        <View style={styles().about}>
          <View style={styles().rent}>
            <Text style={styles().period}>{data.rent.period}</Text>
            <Text style={styles().price}>{`R$ ${data.rent.price}`}</Text>
          </View>

          <View style={styles().type}>
            <GasolineSvg />
          </View>
        </View>
      </View>

      <Image source={{ uri: data.thumbnail }} style={styles().carImage} />
    </TouchableOpacity>
  );
}
