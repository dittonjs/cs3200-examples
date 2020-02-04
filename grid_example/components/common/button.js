import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: 'gray',
      margin: 8,
      borderRadius: 4,
      padding: 8
    },
    title: {
      color: 'white',
      fontSize: 32,
      alignSelf: 'center',
    }
  });

  render() {
   const { onPress, style, title, titleStyle } = this.props;

    return (
      <TouchableOpacity style={[this.styles.button, style]} onPress={onPress}>
        <Text style={[this.styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
