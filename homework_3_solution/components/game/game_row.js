import React from 'react';
import _ from 'lodash';
import { Text, View, StyleSheet } from 'react-native';
import Tile from './tile';
import EmptyTile from './empty_tile';

export default class GameRow extends React.Component {
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
      if (this.props.level === 1 && !columnValue.isTarget) {
        return <EmptyTile key={`column_${i}`} />;
      }
      return (
        <Tile
          key={`column_${i}`}
          style={this.styles.column}
          isTarget={columnValue.isTarget}
          color={columnValue.color}
          handleTilePress={this.props.handleTilePress}
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
