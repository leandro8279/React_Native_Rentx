import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackButton from "@components/BackButton";
import { Bullet } from "@components/Bullet";
import { Button } from "@components/Button";
import { PasswordInput } from "@components/PasswordInput";
import { colors } from "@global/theme";

import { styles } from "./styles";

export function SignUpSecondStep({ navigation }) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleRegister() {
    navigation.navigate("Confirmation");
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles().container}>
          <View style={styles().header}>
            <BackButton onPress={handleBack} />
            <View style={styles().steps}>
              <Bullet />
              <Bullet active />
            </View>
          </View>
          <Text style={styles().title}>Crie sua{"\n"}conta</Text>
          <Text style={styles().subTitle}>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil.
          </Text>
          <View style={styles().form}>
            <Text style={styles().formTitle}>1.Senha</Text>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </View>
          <Button onPress={handleRegister} color={colors.success}>
            Próximo
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
