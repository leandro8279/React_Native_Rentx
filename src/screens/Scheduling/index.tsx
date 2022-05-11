import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import ArrowSvg from "@assets/arrow.svg";
import BackButton from "@components/BackButton";
import { Calendar } from "@components/Calendar";
import { Button } from "@components/Button";

import { styles } from "./styles";
import { colors } from "@global/theme";
export function Scheduling() {
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <BackButton onPress={() => {}} color={colors.shape} />
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
        <Button onPress={() => {}} enabled>
          Confirmar
        </Button>
      </View>
    </View>
  );
}
