import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    console.log(Date.now());
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Hello, world</Text>
      </SafeAreaView>
    );
  }
}
