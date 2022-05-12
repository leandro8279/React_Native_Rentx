import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import BackButton from "@components/BackButton";
import { Accessory } from "@components/Accessory";
import { Button } from "@components/Button";
import { ImageSlider } from "@components/ImageSlider";
import SpeedSvg from "@assets/speed.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { colors } from "@global/theme";

import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { format } from "date-fns";
import { getPlatformDate } from "@utils/getPlatformDate";
import { getAccessoryIcon } from "@utils/getAccessoryIcon";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "SchedulingDetails">;
type RentalPeriod = {
  start: string;
  end: string;
};
export function SchedulingDetails({ navigation, route }: Props) {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );
  const { car, dates } = route.params;
  const totalRent = Number(dates.length * car.rent.price);
  function handleConfirmation() {
    navigation.navigate("Confirmation");
  }
  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy",
      ),
    });
  }, []);
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles().carImage}>
        <ImageSlider imagesUrl={car.photos} />
      </View>

      <ScrollView
        contentContainerStyle={styles().content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles().details}>
          <View>
            <Text style={styles().brand}>{car.brand}</Text>
            <Text style={styles().name}>{car.name}</Text>
          </View>

          <View>
            <Text style={styles().period}>{car.rent.period}</Text>
            <Text style={styles().price}>{`R$ ${car.rent.price.toFixed(
              2,
            )}`}</Text>
          </View>
        </View>

        <View style={styles().accessories}>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </View>

        <View style={styles().rentalPeriod}>
          <View style={styles().calendarIcon}>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </View>

          <View>
            <Text style={styles().dateTitle}>DE</Text>
            <Text style={styles().dateValue}>{rentalPeriod.start}</Text>
          </View>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={colors.text}
          />

          <View>
            <Text style={styles().dateTitle}>ATÉ</Text>
            <Text style={styles().dateValue}>{rentalPeriod.end}</Text>
          </View>
        </View>

        <View style={styles().rentalPrice}>
          <Text style={styles().rentalPriceLabel}>TOTAL</Text>

          <View style={styles().rentalPriceDetails}>
            <Text
              style={styles().rentalPriceQuota}
            >{`R$ ${car.rent.price} x${dates.length} diárias`}</Text>
            <Text style={styles().rentalPriceTotal}>{`R$ ${totalRent.toFixed(
              2,
            )}`}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles().footer}>
        <Button onPress={handleConfirmation} color={colors.success}>
          Alugar agora
        </Button>
      </View>
    </View>
  );
}
