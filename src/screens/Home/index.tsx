import React, { useEffect, useState } from "react";
import Logo from "@assets/logo.svg";
import { Card } from "@components/index";
import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, FlatList, StatusBar, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { CarDTO } from "@dtos/CarDTO";
import { firestore } from "@services/firebase";
import { Load } from "@components/Load";
import { styles } from "./styles";

type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;

export function Home({ navigation }: HomeProps) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await firestore.collection("cars").get();
        response.docs.forEach(doc => {
          setCars(oldArray => [...oldArray, doc.data() as CarDTO]);
        });
      } catch (error) {
        Alert.alert("Error ao carregar os dados do carro");
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  function handleCarDetails() {
    navigation.navigate("CarDetails");
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
        <Text style={styles().totalCars}>Total de 12 carros</Text>
      </View>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <Card data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </View>
  );
}
