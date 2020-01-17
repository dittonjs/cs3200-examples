import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: 'pink',
      margin: 16,
      borderRadius: 4,
      padding: 8
    },
    title: {
      fontSize: 32,
      alignSelf: 'center',
    }
  });

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[this.styles.button, this.props.style]}>
          <Text style={[this.styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
