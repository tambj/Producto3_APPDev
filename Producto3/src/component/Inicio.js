import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { db } from '../config/database';
// import headerImage from '../../assets/nesflis.png';
import backgroundImage from '../../assets/background.jpg';
import { TouchableOpacity } from 'react-native';


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
    };
  }

  async componentDidMount() {
    // Obtener actores
    const querySnapshot = await db.collection('actors').get();
    const actorsList = querySnapshot.docs.map(documentSnapshot => ({
      ...documentSnapshot.data(),
      key: documentSnapshot.id,
    }));
    this.setState({ actors: actorsList });
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Details', { actor: item })}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        
        <View style={styles.card}>
          <Text style={styles.avatarText}>AVATAR</Text>
          <FlatList
            data={this.state.actors}
            renderItem={this.renderItem}
            keyExtractor={item => item.key}
          />
        </View>
      </ImageBackground>
    );
  }
}

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
    shadowOffset: { width: 0, height: 10 },
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
    fontWeight: 'bold',
  },
  avatarText: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Inicio;
