import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BackButton } from "@components/index";
import { Accessory } from "@components/Accessory";
import { ImageSlider } from "@components/ImageSlider";
import { Button } from "@components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@navigation/types";
import { getAccessoryIcon } from "@utils/getAccessoryIcon";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "CarDetails">;
export function CarDetails({ navigation, route }: Props) {
  const { car } = route.params;

  function handleScheduling() {
    navigation.navigate("Scheduling", { car });
  }
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles().carImage}>
        <ImageSlider imagesUrl={car.photos} />
      </View>

      <ScrollView
        contentContainerStyle={styles().content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles().details}>
          <View>
            <Text style={styles().brand}>{car.brand}</Text>
            <Text style={styles().name}>{car.name}</Text>
          </View>

          <View>
            <Text style={styles().period}>{car.rent.period}</Text>
            <Text style={styles().price}>R$ {car.rent.price.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles().accessories}>
          {car.accessories.map(item => (
            <Accessory
              key={item.type}
              name={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
        </View>

        <Text style={styles().about}>{car.about}</Text>
      </ScrollView>
      <View style={styles().footer}>
        <Button onPress={handleScheduling}>Escolher período do aluguel</Button>
      </View>
    </View>
  );
}
