import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderColor: 'black',
    },
    title: {
      fontSize: 64,
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
