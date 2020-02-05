import React from 'react';
import _ from 'lodash';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Tile from './components/common/tile';

const ROWS = 8;
const COLS = 5;

export default class App extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    column: {
      flex: 1,
    }
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
    return _.map(this.state.grid, (row, i) => {
      // IMPORTANT!!!!!
      // This is just an example but not a final solution. The components
      // returned from this function should really be their own React components.
      // HERE IS A BIG HINT: you could write the following return statement as follows
      //   return <Row rowData={row} key={row_i} />;
      // That should point you in the right direction. You will need to move the logic
      // for rendering the button into the Row component which you are going to write :)
      // You are welcome to use this code as a starting point but will get docked points
      // if not broken up into proper react components!
      return (
        <View style={this.styles.row} key={`row_${i}`}>
          {
            _.map(row, (tileValue, j) => {
              return(
                <Tile
                  key={`column_${j}`}
                  title={tileValue}
                  style={this.styles.column}
                  onPress={() => this.handleTilePress(tileValue)}
                />
              );
            })
          }
        </View>
      )
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
