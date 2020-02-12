import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Button from '../common/button';
import Colors from '../common/colors';

export default class StartLevelPage extends React.Component {

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 64,
      color: Colors.primary,
      margin: 16,
    },
    message: {
      margin: 16,
      fontSize: 24,
      textAlign: 'center',
    },
  })

  messages = {
    win: (
      <>
        Nice Job! You beat level 2!
      </>
    ),
    outOfTime: (
      <>
        Bummer! You weren't able to tap 10 tiles before you ran out of time!
      </>
    ),
    wrongTile: (
      <>
        Ouch! You tapped the wrong tile!
      </>
    )
  }

  handleAction = () => {
    this.props.navigateTo('start_level_page', { level: 1, gameState: null });
  }

  render() {
    const { gameState } = this.props.routeParams;
    return (
      <SafeAreaView style={this.styles.container}>
        <Text style={this.styles.title}>Game Over</Text>
        <Text style={this.styles.message}>
          {this.messages[gameState]}
        </Text>
        <Button title="Play Again" onPress={this.handleAction}/>
      </SafeAreaView>
    );
  }
}
