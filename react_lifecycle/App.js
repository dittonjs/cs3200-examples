import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import Loader from './components/loader';

export default class App extends React.PureComponent {
  // mounting
  constructor(props) {
    super();
    console.log("APP WILL MOUNT");
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    console.log("APP MOUNTED");
  }

  // // updating
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state, nextState);
  //   return nextState.loading.isActuallyLoading !== this.state.loading.isActuallyLoading;
  // }

  componentDidUpdate(previousProps, previousState) {
    console.log("APP DID UPDATE");
  }

  updateLoading = () => {
    this.setState((state) => {
      const newState = { ...state };
      newState.loading = { isActuallyLoading: false };
      return newState;
    });
  }

  // render() {}

  //unmounting
  // LOOK AT Loader FOR EXAMPLE

  // both mounting and updating
  render() {
    console.log(this.shouldComponentUpdate)
    console.log("APP RENDERED")
    return (
      <SafeAreaView>
        {this.state.loading.isActuallyLoading && <Loader />}
        <Text>Hello, world!</Text>
        <Button
          title="Press me!!!"
          onPress={this.updateLoading}
        />
      </SafeAreaView>
    );
  }
}
