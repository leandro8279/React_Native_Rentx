import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

type Props = {
  name: string;
  icon: React.FC<SvgProps>;
};
export function Accessory({ icon: Icon, name }: Props) {
  return (
    <View style={styles().container}>
      <Icon width={30} height={30} />
      <Text style={styles().title}>{name}</Text>
    </View>
  );
}
