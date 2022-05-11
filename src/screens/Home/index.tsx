import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList } from "react-native";
import Logo from "@assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { styles } from "./styles";
import { Card } from "@components/index";
export default function Home() {
  const carData = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };
  return (
    <View style={styles().container}>
      <StatusBar backgroundColor="transparent" style="light" translucent />
      <View style={styles().header}>
        <Logo width={RFValue(114)} height={RFValue(11)} />
        <Text style={styles().totalCars}>Total de 12 carros</Text>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Card data={carData} />}
      />
    </View>
  );
}
