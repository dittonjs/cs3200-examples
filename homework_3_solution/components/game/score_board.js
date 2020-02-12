import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ScoreBoard extends React.Component {
  state = {
    timeRemaining: 10,
  }

  styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
    },
    text: {
      fontSize: 32,
    }
  })

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.setState(
        ({ timeRemaining }) => ({ timeRemaining: timeRemaining - 1}),
        () => {
          if (this.state.timeRemaining === 0) {
            this.props.onTimeExpired();
          }
        }
      );
    }, 1000)
  }

  render() {
    return (
      <View style={this.styles.header}>
        <Text style={this.styles.text}>Time: {this.state.timeRemaining}</Text>
        <Text style={this.styles.text}>Score: {this.props.score}</Text>
      </View>
    );
  }
}
