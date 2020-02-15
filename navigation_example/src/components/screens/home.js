import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log(this.props.navigation);
    return (
      <SafeAreaView>
        <Text>Hello from the home page!</Text>
        <Button title="Go to info page" onPress={() => this.props.navigation.navigate('Info')} />
      </SafeAreaView>
    );
  }
}
