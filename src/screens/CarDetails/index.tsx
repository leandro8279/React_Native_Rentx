import React from "react";
import { View, Text, StatusBar } from "react-native";
import { BackButton } from "@components/index";
import { Accessory } from "@components/Accessory";
import { ImageSlider } from "@components/ImageSlider";
import { Button } from "@components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@navigation/types";
import { getAccessoryIcon } from "@utils/getAccessoryIcon";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { colors } from "@global/theme";
import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackParamList, "CarDetails">;
export function CarDetails({ navigation, route }: Props) {
  const { car } = route.params;

  function handleScheduling() {
    navigation.navigate("Scheduling", { car });
  }

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });
  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });
  function handleBack() {
    navigation.goBack();
  }
  return (
    <View style={styles().container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View
        style={[
          headerStyleAnimation,
          styles().contentHeader,
          { backgroundColor: colors.background_secondary },
        ]}
      >
        <View style={styles().header}>
          <BackButton onPress={handleBack} />
        </View>
        <Animated.View style={sliderCarsStyleAnimation}>
          <View style={styles().carImage}>
            <ImageSlider imagesUrl={car.photos} />
          </View>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles().content}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
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
          {car.accessories.map((item) => (
            <Accessory
              key={item.type}
              name={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
        </View>

        <Text style={styles().about}>{car.about}</Text>
      </Animated.ScrollView>
      <View style={styles().footer}>
        <Button onPress={handleScheduling} enabled>
          Escolher período do aluguel
        </Button>
      </View>
    </View>
  );
}
