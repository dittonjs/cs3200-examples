import React from 'react';
import { Text, View } from 'react-native';
import Button from './common/button';

export default class StopwatchPage extends React.Component {
  state = {
    secondsPassed: 0,
    stopwatchRunning: false,
  }

  timerId = null

  componentWillUnmount = () => {
    clearTimeout(this.timerId);
  }

  toggleStopwatch = () => {
    if (!this.state.stopwatchRunning) {
      // starting the timer
      this.timerId = setInterval(
        () => {
          this.setState((state) => {
            const newState = { ...state };
            newState.secondsPassed = state.secondsPassed + 1;
            return newState;
          });
        },
        1000
      );

      // telling the app the timer start
      this.setState({
        stopwatchRunning: true,
      })
    } else {
      // stopping the timer
      clearTimeout(this.timerId);
      this.setState({
        stopwatchRunning: false,
      });
    }
  }

  render() {
    const { navigateTo } = this.props;
    return (
      <View>
        <Text style={{ fontSize: 90 }}>{this.state.secondsPassed}</Text>
        <Button
          title="Toggle Stopwatch On/Off"
          onPress={this.toggleStopwatch}
        />
        <Button
          title="Back to welcome"
          onPress={() => navigateTo('welcome')}
        />
      </View>
    );
  }
}
