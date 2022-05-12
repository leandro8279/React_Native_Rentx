import React from "react";
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
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "Scheduling">;
export function SchedulingDetails({ navigation, route }: Props) {
  function handleConfirmation() {
    navigation.navigate("Confirmation");
  }
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles().carImage}>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles().content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles().details}>
          <View>
            <Text style={styles().brand}>Lamburghini</Text>
            <Text style={styles().name}>Huracan</Text>
          </View>

          <View>
            <Text style={styles().period}>Ao dia</Text>
            <Text style={styles().price}>R$ 580</Text>
          </View>
        </View>

        <View style={styles().accessories}>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="380Km/h" icon={SpeedSvg} />
        </View>

        <View style={styles().rentalPeriod}>
          <View style={styles().calendarIcon}>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </View>

          <View>
            <Text style={styles().dateTitle}>DE</Text>
            <Text style={styles().dateValue}>18/10/2021</Text>
          </View>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={colors.text}
          />

          <View>
            <Text style={styles().dateTitle}>ATÉ</Text>
            <Text style={styles().dateValue}>21/10/2021</Text>
          </View>
        </View>

        <View style={styles().rentalPrice}>
          <Text style={styles().rentalPriceLabel}>TOTAL</Text>

          <View style={styles().rentalPriceDetails}>
            <Text style={styles().rentalPriceQuota}>R$ 580 x3 diárias</Text>
            <Text style={styles().rentalPriceTotal}>R$ 2.900</Text>
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
