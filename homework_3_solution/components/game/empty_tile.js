import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class EmptyTile extends React.Component {

  styles = StyleSheet.create({
    emptyTile: {
      flex: 1,
      margin: 8,
    }
  });

  render() {
    return (
        <View style={this.styles.emptyTile} />
    );
  }
}
