import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FruitsPage from '../screens/home/fruits_page';
import FruitPage from '../screens/home/fruit_page';
const Stack = createStackNavigator();

export default class HomeNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Fruits" component={FruitsPage} />
        <Stack.Screen name="Fruit" component={FruitPage} />
      </Stack.Navigator>
    );
  }
}
