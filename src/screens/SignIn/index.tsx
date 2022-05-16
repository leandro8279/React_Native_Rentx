import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { PasswordInput } from "@components/PasswordInput";
import { colors } from "@global/theme";
import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView>
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
          <View style={styles().footer}>
            <Button onPress={() => {}} enabled style={{ marginBottom: 8 }}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
