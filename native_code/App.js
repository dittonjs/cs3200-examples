import React from 'react';
import { SafeAreaView, Text, NativeModules } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    NativeModules.MathyStuff.addTwoNumbers(6, 6, (result) => {
      console.log(result);
    });
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Hello, world</Text>
      </SafeAreaView>
    );
  }
}
