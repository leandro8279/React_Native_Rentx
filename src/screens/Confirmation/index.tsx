import React from "react";
import { View, Text, StatusBar, useWindowDimensions } from "react-native";
import { ConfirmButton } from "@components/ConfirmButton";

import LogoSvg from "@assets/logo_background_gray.svg";
import DoneSvg from "@assets/done.svg";

import { styles } from "./styles";
export function Confirmation() {
  const { width } = useWindowDimensions();
  return (
    <View style={styles().container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <View style={styles().content}>
        <DoneSvg width={80} height={80} />
        <Text style={styles().title}>Carro alugado</Text>
        <Text style={styles().subTitle}>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Text>
      </View>
      <View style={styles().footer}>
        <ConfirmButton onPress={() => {}}>OK</ConfirmButton>
      </View>
    </View>
  );
}
