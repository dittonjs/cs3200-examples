import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class HomePage2 extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello, I am a {this.props.route.params.fruit}</Text>
      </SafeAreaView>
    );
  }
}
