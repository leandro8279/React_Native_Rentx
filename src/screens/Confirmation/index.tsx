import React from "react";
import { View, Text, StatusBar, useWindowDimensions } from "react-native";
import { ConfirmButton } from "@components/ConfirmButton";

import LogoSvg from "@assets/logo_background_gray.svg";
import DoneSvg from "@assets/done.svg";

import { RFValue } from "react-native-responsive-fontsize";

import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "Confirmation">;
export function Confirmation({ navigation, route }: Props) {
  const { title, message, nextScreenRoute } = route.params;
  const { width } = useWindowDimensions();
  const handleConfirm = () => {
    if (nextScreenRoute === "Home") {
      navigation.replace("Home");
    } else {
      navigation.replace("SignIn");
    }
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
        <Text style={styles().title}>{title}</Text>
        <Text style={styles().subTitle}>{message}</Text>
      </View>
      <View style={styles().footer}>
        <ConfirmButton onPress={handleConfirm}>OK</ConfirmButton>
      </View>
    </View>
  );
}
