import { CarDTO } from "@dtos/CarDTO";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Splash: undefined;
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: "SignIn" | "Home";
  };
  MyCars: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: { name: string; email: string; driverLicense: string };
  };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
