import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Counter from './components/counter';
import Button from './components/common/button';

export default class App extends React.Component {
  state = {
    count: 0,
  }

  changeCountValue = (delta) => {
    this.setState(state => ({ count: state.count + delta }));
  }

  render() {
    return (
      <SafeAreaView>
        <Counter count={this.state.count} />
        <Button title="+" onPress={() => this.changeCountValue(1)} />
        <Button title="-" onPress={() => this.changeCountValue(-1)} />
      </SafeAreaView>
    );
  }
}
