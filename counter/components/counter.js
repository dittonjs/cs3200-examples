import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default class Counter extends React.Component {
  styles = StyleSheet.create({
    counter: {
      fontSize: 120,
      color: 'teal',
      alignSelf: 'center',
    }
  });

  render() {
    return (
      <Text style={[this.styles.counter, this.props.style]}>
        {this.props.count}
      </Text>
    );
  }
}
