import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "@components/BackButton";
import Card from "@components/Card";
import { Load } from "@components/Load";
import { CarDTO } from "@dtos/CarDTO";

import { colors } from "@global/theme";
import { AppStackParamList } from "@navigation/types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { api } from "@services/api";

import { styles } from "./styles";

type CarProps = {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
};
type Props = NativeStackScreenProps<AppStackParamList, "MyCars">;
export function MyCars({ navigation }: Props) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=2");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={colors.shape} />
        <Text style={styles().title}>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Text>
        <Text style={styles().subTitle}>
          Conforto, segurança e praticidade.
        </Text>
      </View>

      {loading ? (
        <Load />
      ) : (
        <View style={styles().content}>
          <View style={styles().appointments}>
            <Text style={styles().appointmentsTitle}>Agendamentos feitos</Text>
            <Text style={styles().appointmentsQuantity}>{cars.length}</Text>
          </View>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles().carWrapper}>
                <Card data={item.car} />
                <View style={styles().carFooter}>
                  <Text style={styles().carFooterTitle}>Período</Text>
                  <View style={styles().carFooterPeriod}>
                    <Text style={styles().carFooterDate}>{item.startDate}</Text>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles().carFooterDate}>{item.endDate}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
