import React from 'react';
import _ from 'lodash';
import { Text, View, StyleSheet } from 'react-native';
import Tile from './tile';

export default class Row extends React.Component {
  styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    column: {
      flex: 1,
    }
  })

  getColumns() {
    return _.map(this.props.columns, (columnValue, i) => {
      return (
        <Tile
          key={`column_${i}`}
          style={this.styles.column}
          title={columnValue}
          onPress={() => this.props.handleTilePress(columnValue)}
        />
      );
    });
  }
  render() {

    return (
        <View style={this.styles.row}>
          {this.getColumns()}
        </View>
    );
  }
}
