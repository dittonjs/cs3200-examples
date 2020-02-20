import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage1 from '../screens/home/home_page_1';
import HomePage2 from '../screens/home/home_page_2';
const Stack = createStackNavigator();

export default class HomeNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home Page 1" component={HomePage1} />
        <Stack.Screen name="Home Page 2" component={HomePage2} />
      </Stack.Navigator>
    );
  }
}
