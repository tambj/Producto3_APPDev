// CustomHeader.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import headerImage from '../../assets/nesflis.png';

const CustomHeader = () => (
  <View style={styles.header}>
    <Image style={styles.headerImage} source={headerImage} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#303030',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CustomHeader;
