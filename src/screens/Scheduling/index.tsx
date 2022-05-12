import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import ArrowSvg from "@assets/arrow.svg";
import BackButton from "@components/BackButton";
import { Calendar } from "@components/Calendar";
import { Button } from "@components/Button";

import { colors } from "@global/theme";
import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "Scheduling">;
export function Scheduling({ navigation, route }: Props) {
  const { car } = route.params;
  function handleSchedulingDetails() {
    navigation.navigate("SchedulingDetails", { car });
  }
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => navigation.goBack()} color={colors.shape} />
        <Text style={styles().title}>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Text>
        <View style={styles().rentalPeriod}>
          <View>
            <Text style={styles().dateTitle}>DE</Text>
            <Text style={styles(false).dateValue}>18/10/2021</Text>
          </View>

          <ArrowSvg />

          <View>
            <Text style={styles().dateTitle}>ATÉ</Text>
            <Text style={styles(false).dateValue}> 20/10/2021</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles().content}>
        <Calendar />
      </ScrollView>

      <View style={styles().footer}>
        <Button onPress={handleSchedulingDetails} enabled>
          Confirmar
        </Button>
      </View>
    </View>
  );
}
