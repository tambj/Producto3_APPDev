// src/component/Player.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const aspectRatio = 16 / 9;

const Player = ({ route, navigation }) => {
  const { videoUrl } = route.params;

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={[styles.video, { height: width / aspectRatio }]}
        useNativeControls
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <FontAwesome name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  video: {
    
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
});

export default Player;
