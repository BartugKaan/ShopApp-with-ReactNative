import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useCart } from '../context/CartContext';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollViewRef = React.useRef(null)

  const handleIndicatorPress = (index) => {
    setCurrentImageIndex(index)
    scrollViewRef.current?.scrollTo({
      x: index * Dimensions.get('window').width,
      animated: true,
    })
  }

  return (
    <ScrollView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          )
          setCurrentImageIndex(index)
        }}
        scrollEventThrottle={16}
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

      <View style={styles.indicators}>
        {product.images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleIndicatorPress(index)}
          >
            <Icon
              name="circle"
              size={10}
              color={currentImageIndex === index ? '#e91e63' : '#666'}
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
        ))}
      </View>

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
            {product.description_details.en.fabric ||
              'No description available'}
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => {
            addToCart(product);
            Alert.alert('Başarılı', 'Ürün sepete eklendi');
          }}
        >
          <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

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
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  addToCartButton: {
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default ProductDetailScreen
