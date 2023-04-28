import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet, ImageBackground} from 'react-native';
import {db} from '../config/database';
import headerImage from '../../assets/nesflis.png';
import backgroundImage from '../../assets/background.jpg';

const Inicio = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await db.collection('actors').get();
      const actorsList = querySnapshot.docs.map(documentSnapshot => ({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      }));
      setActors(actorsList);
    };
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nombre}</Text>
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={headerImage}
        />
      </View>
      <View style={styles.card}>
        <FlatList
          data={actors}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#303030',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    flex: 1,
    margin: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(245, 245, 245, 0.6)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 20,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Inicio;
