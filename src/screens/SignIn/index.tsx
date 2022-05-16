import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { PasswordInput } from "@components/PasswordInput";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@navigation/types";

import * as Yup from "yup";

import { colors } from "@global/theme";

import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "SignIn">;
export function SignIn({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });
      await schema.validate({ email, password });
      Alert.alert("Tudo certo");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
      }
    }
  }
  function handleNewAccount() {
    navigation.navigate("SignUpFirstStep");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: colors.shape }}
    >
      <TouchableWithoutFeedback>
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
          <View style={styles().form}>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <Button onPress={handleSignIn} enabled style={{ marginBottom: 8 }}>
              Login
            </Button>
            <Button
              onPress={handleNewAccount}
              light
              color={colors.background_primary}
              enabled
            >
              Criar conta gratuita
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
