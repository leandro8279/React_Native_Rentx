import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BackButton from "@components/BackButton";
import { Bullet } from "@components/Bullet";
import { Button } from "@components/Button";
import { PasswordInput } from "@components/PasswordInput";
import { colors } from "@global/theme";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@navigation/types";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "SignUpSecondStep">;
export function SignUpSecondStep({ navigation, route }: Props) {
  const [password, setPassword] = useState("1234");
  const [passwordConfirm, setPasswordConfirm] = useState("1234");
  const { user } = route.params;
  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação");
    }
    if (password !== passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }
    console.log(user);

    navigation.navigate("Confirmation", {
      nextScreenRoute: "SignIn",
      title: "Conta criada!",
      message: `Agora é só fazer o login\n e aproveitar.`,
    });
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
            Cadastrar
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
