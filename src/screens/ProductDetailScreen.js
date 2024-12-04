import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {product.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      
      
      <View style={styles.infoContainer}>
        <Text style={styles.vendor}>{product.vendor.name}</Text>
        <Text style={styles.name}>{product.names.en}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>Product Code:</Text>
          <Text style={styles.detailText}>{product.product_code}</Text>
          
          <Text style={styles.detailTitle}>Series:</Text>
          <Text style={styles.detailText}>{product.series.name}</Text>
          
          <Text style={styles.detailTitle}>Description:</Text>
          <Text style={styles.detailText}>
            {product.description_details.en.fabric || 'No description available'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  infoContainer: {
    padding: 15,
  },
  vendor: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    color: '#e91e63',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ProductDetailScreen; 