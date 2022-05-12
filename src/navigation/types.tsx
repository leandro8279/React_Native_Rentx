import { CarDTO } from "@dtos/CarDTO";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Home: undefined;
  CarDetails: CarDTO;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  Confirmation: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

declare global {
  namespace ReactNavigation {
    type RootParamList = AppStackParamList;
  }
}
