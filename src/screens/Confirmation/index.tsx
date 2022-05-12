import React from "react";
import { View, Text, StatusBar, useWindowDimensions } from "react-native";
import { ConfirmButton } from "@components/ConfirmButton";

import LogoSvg from "@assets/logo_background_gray.svg";
import DoneSvg from "@assets/done.svg";

import { RFValue } from "react-native-responsive-fontsize";

import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "Scheduling">;
export function Confirmation({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const handleConfirm = () => {
    navigation.replace("Home");
  };
  return (
    <View style={styles().container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} height={RFValue(230)} />

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
        <ConfirmButton onPress={handleConfirm}>OK</ConfirmButton>
      </View>
    </View>
  );
}
