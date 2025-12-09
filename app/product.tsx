import TopBanner from '@/components/TopBanner/topbanner';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Product = () => {
  return (
    <View style={styles.container}>
      <TopBanner/>
      <Text style={styles.heading}>Product Screen</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
