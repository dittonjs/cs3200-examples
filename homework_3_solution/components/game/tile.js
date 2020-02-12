import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Tile extends React.Component {
  styles = StyleSheet.create({
    tile: (backgroundColor) => ({
      backgroundColor,
      margin: 8,
      borderRadius: 4,
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    }),
  });

  handleTilePress = () => {
    this.props.handleTilePress(this.props.isTarget);
  }
  render() {
   const { onPress } = this.props;

    return (
      <TouchableOpacity
        style={this.styles.tile(this.props.color)}
        onPress={this.handleTilePress}
      />
    );
  }
}
