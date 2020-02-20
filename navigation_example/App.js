import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeNavigator from './src/components/navigators/home';
import Info from './src/components/screens/info';
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Info" component={Info} />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}
