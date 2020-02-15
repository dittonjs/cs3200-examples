import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/screens/home';
import Info from './src/components/screens/info';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Info" component={Info} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
