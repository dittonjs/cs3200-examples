import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  styles = StyleSheet.create({
    containerRow: {
      backgroundColor: 'gray',
      flex: 1,
      borderColor: 'black',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    containerColumn: {
      backgroundColor: 'gray',
      flex: 1,
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center'
    },
    subContainer: {
      flex: 1,
      backgroundColor: 'green',
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
    }
  });



  render() {
    return (
      <>
        <SafeAreaView style={this.styles.containerRow}>
          { /* 1 / 2 */ }
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
        </SafeAreaView>
        <SafeAreaView style={this.styles.containerColumn}>
          { /* 1 / 2 */ }
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
          <View style={this.styles.subContainer}><Text>Hi</Text></View>
        </SafeAreaView>
      </>
    );
  }
}
