import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import backgroundImage from '../../assets/background.jpg';

const Details = ({ route, navigation }) => {
  const { actor } = route.params;

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handlePlayButtonPress = () => {
    navigation.navigate('Player', { videoUrl: actor.video });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.name}>{actor.nombre}</Text>
      <Image style={styles.image} source={{ uri: actor.foto }} />
      <View style={styles.card}>
        <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Edad:</Text> {actor.edad}</Text>
        <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Género:</Text> {actor.genero}</Text>
        <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Nacionalidad:</Text> {actor.nacionalidad}</Text>
        <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Activo:</Text> {actor.activo}</Text>
        <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>Descripción:</Text> {actor.descripcion}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <FontAwesome name="arrow-left" size={30} color="#ac1313" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayButtonPress}>
          <FontAwesome name="play" size={30} color="#ac1313" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color:'white',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    padding: 20,
    width: '90%',
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.6)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Details;
