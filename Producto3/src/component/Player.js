import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import backgroundImage from '../../assets/background.jpg';

const { width } = Dimensions.get('window');
const aspectRatio = 16 / 9;

const Player = ({ route, navigation }) => {
  const { videoUrl } = route.params;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = async () => {
    if (videoRef.current) {
      await videoRef.current.stopAsync();
      setIsPlaying(false);
    }
  };
  const [isMuted, setIsMuted] = useState(false);
  const handleMute = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      await videoRef.current.setIsMutedAsync(!status.isMuted);
      setIsMuted(!status.isMuted);
    }
  };


  const handleForward = async () => {
    if (videoRef.current) {
      const status = await videoRef.current.getStatusAsync();
      await videoRef.current.setPositionAsync(status.positionMillis + 5000);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={styles.video}
        useNativeControls
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <FontAwesome name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.controlButtonsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={handlePlayPause}>
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color="#ac1313"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={handleStop}>
          <FontAwesome name="stop" size={30} color="#ac1313" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={handleMute}>
          <FontAwesome name={isMuted ? 'volume-off' : 'volume-down'} size={30} color="#ac1313"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleForward}>
          <FontAwesome name="forward" size={30} color="#ac1313"/>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  video: {
    width: '100%',
    aspectRatio,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  controlButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  controlButton: {
    padding: 5,
  },
});

export default Player;