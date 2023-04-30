import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import headerImage from '../../assets/nesflis.png';

const CustomHeader = () => {
  const navigation = useNavigation();

  const navigateToInicio = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigateToInicio} style={styles.headerImageContainer}>
        <Image style={styles.headerImage} source={headerImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#303030',
  },
  headerImageContainer: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CustomHeader;
