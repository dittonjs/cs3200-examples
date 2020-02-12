import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from './colors';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
      margin: 16,
      borderRadius: 100,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 32,
      paddingRight: 32,
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
