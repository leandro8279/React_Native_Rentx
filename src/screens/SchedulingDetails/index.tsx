import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackButton from "@components/BackButton";
import { Accessory } from "@components/Accessory";
import { Button } from "@components/Button";
import { ImageSlider } from "@components/ImageSlider";
import SpeedSvg from "@assets/speed.svg";
import { styles } from "./styles";
export function SchedulingDetails() {
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <BackButton onPress={() => {}} />
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

        <Text style={styles().about}>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </Text>
      </ScrollView>
      <View style={styles().footer}>
        <Button>Escolher período do aluguel</Button>
      </View>
    </View>
  );
}
