import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View, Platform } from 'react-native';
import { check, request, openSettings, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default (permission) => (ComponentDefinition) => {
  return class PermissonWrapper extends React.Component {

    state = {
      permissionStatus: 'initializing'
    }

    componentDidMount() {
      check(permission).then((result) => {
        switch (result) {
          case RESULTS.DENIED:
            request(permission).then((result) => {
              this.setState({ permissionStatus: result });
            });
            break;
          default:
            this.setState({ permissionStatus: result });
            break;
        }
      });
    }

    render() {
      if (this.state.permissionStatus === RESULTS.DENIED || this.state.permissionStatus === RESULTS.BLOCKED) {
        return (
          <SafeAreaView>
            <Text>You must allow {permission} in order to use this app. Go to your settings and allow permission</Text>
          </SafeAreaView>
        );
      }

      if (this.state.permissionStatus === 'initializing') return null;

      console.log(this.state);
      const {children, ...rest} = this.props;
      return (
        <ComponentDefinition
          {...rest}
        >
          {children}
        </ComponentDefinition>
      )
    }
  }
}
