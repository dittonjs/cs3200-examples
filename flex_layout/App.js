import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  styles = StyleSheet.create({
    containerColumn: {
      backgroundColor: 'gray',
      flex: 1,
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center'
    },
    containerRow: {
      backgroundColor: 'gray',
      flex: 1,
      borderColor: 'black',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    subContainer: {
      flex: 1,
      backgroundColor: 'green',
      borderColor: 'black',
      borderWidth: 1,
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
