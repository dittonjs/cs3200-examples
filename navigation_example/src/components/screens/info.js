import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default class Info extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello from the info page!</Text>
        <Button title="Go to home page" onPress={() => this.props.navigation.replace('Home')} />
      </SafeAreaView>
    );
  }
}
