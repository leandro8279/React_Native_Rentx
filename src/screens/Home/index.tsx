import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "@assets/logo.svg";
import { Card } from "@components/index";
import { AppStackParamList } from "@navigation/types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RFValue } from "react-native-responsive-fontsize";

import { CarDTO } from "@dtos/CarDTO";
import { Load } from "@components/Load";
import { api } from "@services/api";
import { colors } from "@global/theme";
import { styles } from "./styles";

type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;

export function Home({ navigation }: HomeProps) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleMyCars() {
    navigation.navigate("MyCars");
  }
  return (
    <View style={styles().container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={styles().header}>
        <Logo width={RFValue(114)} height={RFValue(11)} />
        <Text
          style={styles().totalCars}
        >{`Total de ${cars.length} carros`}</Text>
      </View>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <Card data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <Pressable onPress={handleMyCars} style={styles().myCarsButton}>
        <Ionicons name="ios-car-sport" size={32} color={colors.shape} />
      </Pressable>
    </View>
  );
}
