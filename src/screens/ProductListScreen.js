import React from 'react';
import { View, FlatList, StyleSheet , Button} from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    />
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon name="shopping-cart" size={24} color="black" onPress={() => navigation.navigate('Cart')} />
    });
  }, [navigation]);

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
});

export default ProductListScreen; 