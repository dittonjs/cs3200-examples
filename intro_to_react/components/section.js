import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Section extends React.Component {
  styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    description: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'grey',
    },
  });

  render() {
    const { styles } = this;
    const { title, children } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {children}
        </Text>
      </View>
    );
  }
}
