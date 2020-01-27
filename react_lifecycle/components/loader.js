import React from 'react';

import { Text } from 'react-native';

export default class Loader extends React.Component {
  constructor(props) {
    super();
    console.log("LOADER WILL MOUNT");
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    console.log("LOADER MOUNTED");
  }

  // umounting lifecycle

  componentWillUnmount() {
    console.log("LOADER UNMOUNTED");
  }

  render() {
    console.log("LOADER RENDERED");
    return <Text>Loading...</Text>;
  }
}
