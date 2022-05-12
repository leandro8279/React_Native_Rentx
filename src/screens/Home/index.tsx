import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Card } from "@components/index";
import Logo from "@assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { styles } from "./styles";
import { AppStackParamList } from "@navigation/types";

type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;
export function Home({ navigation }: HomeProps) {
  const carData = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };
  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }
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
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Card data={carData} onPress={handleCarDetails} />
        )}
      />
    </View>
  );
}
