import React from 'react';
import _ from 'lodash';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Button from './components/common/button';

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
    grid: [
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
      [1,2,3,4,5],
    ]
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
            _.map(row, (columnValue, j) => {
              return(
                <Button
                  key={`column_${j}`}
                  title={columnValue}
                  style={this.styles.column}
                  onPress={() => console.log(`You pressed the button at row: ${i}, column: ${j}!`)}
                />
              );
            })
          }
        </View>
      )
    });
  }

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        {this.rowComponents}
      </SafeAreaView>
    );
  }
}
