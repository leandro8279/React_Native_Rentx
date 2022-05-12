import { CarDTO } from "@dtos/CarDTO";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO };
  Confirmation: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
