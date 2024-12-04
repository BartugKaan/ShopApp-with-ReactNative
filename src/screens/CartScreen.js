import React from 'react';
import { View, Text } from 'react-native';

const CartScreen = () => {
  const renderItem = ({ item }) => (
    <ProductCard product={item} />
  );

    return <View>
        <Text>Cart</Text>
    </View>
}

export default CartScreen;