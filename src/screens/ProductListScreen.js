import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      >
        <Image source={{ uri: item.images[0] }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <Text style={styles.vendor}>{item.vendor.name}</Text>
        <Text style={styles.name}>{item.names.en}</Text>
        <Text style={styles.price}>{item.price} TL</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item._id.$oid}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  vendor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f00',
  }
});

export default ProductListScreen; 