import React from 'react';
import _ from 'lodash';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Row from './components/row';
const ROWS = 8;
const COLS = 5;

export default class App extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })

  state = {
    grid: null,
    loading: true,
  }

  componentDidMount() {
    this.setState({
      grid: this.buildGrid(),
      loading: false,
    });
  }

  buildGrid() {
    let stack = _.fill(Array(COLS * ROWS), 0);
    stack[0] = 1;
    stack = _.shuffle(stack);
    const grid = _.map(_.range(0, ROWS), () => {
      return _.map(_.range(0, COLS), () => stack.pop());
    });
    return grid;
  }

  handleTilePress = (tileValue) => {
    if (tileValue === 1) {
      this.setState({
        grid: this.buildGrid()
      });
    } else {
      console.log('The user clicked the wrong tile');
    }
  }

  get rowComponents() {
    return _.map(this.state.grid, (columns, i) => {
      return (
        <Row
          columns={columns}
          handleTilePress={this.handleTilePress}
          key={`row_${i}`}
        />
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView><Text>Loading...</Text></SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={this.styles.container}>
        {this.rowComponents}
      </SafeAreaView>
    );
  }
}
