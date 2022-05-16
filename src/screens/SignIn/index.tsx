import { Button } from "@components/Button";
import { colors } from "@global/theme";
import React from "react";
import { View, Text, StatusBar } from "react-native";

import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Text style={styles().title}>Estamos{"\n"}quase lá.</Text>
        <Text style={styles().subTitle}>
          Faça seu login para começar{"\n"}
          uma experiência incrível.
        </Text>
      </View>
      <View style={styles().footer}>
        <Button onPress={() => {}} enabled>
          Login
        </Button>
        <Button
          onPress={() => {}}
          light
          color={colors.background_secondary}
          enabled
        >
          Criar conta gratuita
        </Button>
      </View>
    </View>
  );
}
