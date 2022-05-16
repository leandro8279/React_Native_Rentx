import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { AppStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import BackButton from "@components/BackButton";
import { Bullet } from "@components/Bullet";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import * as Yup from "yup";

import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "SignUpFirstStep">;
export function SignUpFirstStep({ navigation }: Props) {
  const [name, setName] = useState("Leandro Jose");
  const [email, setEmail] = useState("Leandro@gmail.com");
  const [driverLicense, setDriverLicense] = useState("1234");
  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      }
    }
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
              <Bullet active />
              <Bullet />
            </View>
          </View>

          <Text style={styles().title}>Crie sua{"\n"}conta</Text>
          <Text style={styles().subTitle}>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil.
          </Text>
          <View style={styles().form}>
            <Text style={styles().formTitle}>1.Dados</Text>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
            />

            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </View>
          <Button onPress={handleNextStep}>Próximo</Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
