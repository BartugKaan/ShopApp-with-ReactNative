import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: product.main_image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.vendor}>{product.vendor.name}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.names.en}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 10,
  },
  vendor: {
    fontSize: 12,
    color: '#666',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    fontWeight: 'bold',
  },
});

export default ProductCard; 