import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Pressable,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "@assets/logo.svg";
import { Card } from "@components/index";
import { AppStackParamList } from "@navigation/types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RFValue } from "react-native-responsive-fontsize";

import { CarDTO } from "@dtos/CarDTO";
import { LoadAnimation } from "@components/LoadAnimation";
import { api } from "@services/api";
import { colors } from "@global/theme";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { styles } from "./styles";

type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;
const AnimatedButton = Animated.createAnimatedComponent(Pressable);
export function Home({ navigation }: HomeProps) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleMyCars() {
    navigation.navigate("MyCars");
  }
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <View style={styles().container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={styles().header}>
        <Logo width={RFValue(114)} height={RFValue(11)} />
        {!loading && (
          <Text
            style={styles().totalCars}
          >{`Total de ${cars.length} carros`}</Text>
        )}
      </View>
      {loading ? (
        <LoadAnimation />
      ) : (
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <Card data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <AnimatedButton
            onPress={handleMyCars}
            style={[styles().button, { backgroundColor: colors.main }]}
          >
            <Ionicons name="ios-car-sport" size={32} color={colors.shape} />
          </AnimatedButton>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
