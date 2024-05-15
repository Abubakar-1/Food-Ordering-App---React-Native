import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, useSegments } from "expo-router";
import { Order } from "@/types";

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();
  console.log(segments);

  return (
    <Link href={`/${segments[0]}/order/${order.id}`} asChild>
      <Pressable>
        <View>
          <Text>Order #{order.id}</Text>
          <Text>Order #{order.id}</Text>
        </View>

        <Text>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrderListItem;
