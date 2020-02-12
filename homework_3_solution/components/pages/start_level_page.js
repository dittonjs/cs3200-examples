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
    highlight: {
      color: Colors.primary,
    }
  })

  titles = {
    1: 'Tapit!',
    2: 'Nice!'
  }

  messages = {
    1: (
      <>
        Tap the <Text style={this.styles.highlight}>teal</Text> button
        many times as you can before time expires. If you manage to tap at least
        10 then you move on to level 2!
      </>
    ),
    2: (
      <>
        You scored 10 points and qualified for level 2. Keep tapping
        the <Text style={this.styles.highlight}>teal</Text> button, but watch out!
        If you click the wrong color, then the game is over!
      </>
    )
  }

  handleAction = () => {
    this.props.navigateTo('game_page');
  }

  render() {
    const { level } = this.props.routeParams;
    return (
      <SafeAreaView style={this.styles.container}>
        <Text style={this.styles.title}>{this.titles[level]}</Text>
        <Text style={this.styles.message}>
          {this.messages[level]}
        </Text>
        <Button title={`Start Level ${level}`} onPress={this.handleAction}/>
      </SafeAreaView>
    );
  }
}
