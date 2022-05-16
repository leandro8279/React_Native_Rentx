import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  active?: boolean;
};
export function Bullet({ active }: Props) {
  return <View style={styles(active).container} />;
}
