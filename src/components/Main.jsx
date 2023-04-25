import React from 'react';
import {Text, View } from 'react-native';
import Cabecera from './Cabecera';


const Main = () => {
    return (
        <View style={styles}>
            <Cabecera></Cabecera>
            <Text> Hola</Text>
        </View>
    )
}

export default Main;
