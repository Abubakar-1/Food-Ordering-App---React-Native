import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default OrderDetailScreen;
