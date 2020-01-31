import React from 'react';
import { Text, View } from 'react-native';
import Button from './common/button';
export default class WelcomePage extends React.Component {
  render() {
    const { navigateTo } = this.props;
    return (
      <View>
        <Text>We are on the welcome page</Text>
        <Button
          title="Go to stopwatch"
          onPress={() => navigateTo('stopwatch')}
        />
      </View>
    );
  }
}
