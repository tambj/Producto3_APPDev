import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/component/Inicio';
import CustomHeader from './src/component/CustomHeader';
import Details from './src/component/Details';
import Player from './src/component/Player';

const Stack = createStackNavigator();

const customHeader = () => ({
  header: () => <CustomHeader />,
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={customHeader}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={customHeader}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={customHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
