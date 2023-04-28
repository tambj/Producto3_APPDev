import React from 'react'; // Por si acaso
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/component/Inicio';

export default function App() {
  return (
    <Inicio/> // Llamando al componente Inicio
  );
}
