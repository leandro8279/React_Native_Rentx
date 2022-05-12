import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Alert } from "react-native";
import ArrowSvg from "@assets/arrow.svg";
import BackButton from "@components/BackButton";
import { Calendar, DayProps, MarkedDateProps } from "@components/Calendar";
import { Button } from "@components/Button";

import { colors } from "@global/theme";
import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { generateInterval } from "@utils/generateInterval";
import { getPlatformDate } from "@utils/getPlatformDate";
import { format } from "date-fns";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "Scheduling">;

type RentalPeriod = {
  startFormatted: string;
  endFormatted: string;
};
export function Scheduling({ navigation, route }: Props) {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );
  const [rentPeriod, setRentPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );
  const { car } = route.params;
  function handleRentalConfirm() {
    if (!rentPeriod.startFormatted || !rentPeriod.endFormatted) {
      Alert.alert("Selecione a data inicial e data final que deseja alugar.");
    } else {
      navigation.navigate("SchedulingDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }
  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy",
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  };

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
            <Text style={styles(!rentPeriod.startFormatted).dateValue}>
              {rentPeriod.startFormatted}
            </Text>
          </View>

          <ArrowSvg />

          <View>
            <Text style={styles().dateTitle}>ATÉ</Text>
            <Text style={styles(!rentPeriod.endFormatted).dateValue}>
              {rentPeriod.endFormatted}
            </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles().content}>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </ScrollView>

      <View style={styles().footer}>
        <Button onPress={handleRentalConfirm} enabled>
          Confirmar
        </Button>
      </View>
    </View>
  );
}
