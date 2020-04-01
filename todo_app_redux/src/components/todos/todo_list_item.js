import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'white',
    height: 64,
    borderBottomWidth: 1,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: 'red',
    height: 64,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  editButton: {
    flex: 1,
    backgroundColor: 'green',
    height: 64,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16,
  },
  whiteText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  hidden: {
    flexDirection: 'row',
  },
  visible: {
    justifyContent: 'center',
    paddingLeft: 16,
  }
});

export default function(props) {
  return (
    <SwipeRow
      rightOpenValue={-125}
      leftOpenValue={125}
      stopRightSwipe={-145}
      stopLeftSwipe={145}
      onRowPress={() => props.navigation.navigate('Todo Screen')}
    >
      <View style={[styles.base, styles.hidden]}>
        {/* HIDDEN: need to swipe to see this content */}
        <TouchableOpacity onPress={() => props.deleteTodo(props.todo.id)} style={styles.deleteButton}>
          <Text style={styles.whiteText}>DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={console.log} style={styles.editButton}>
          <Text style={styles.whiteText}>MODIFY</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.base, styles.visible]}>
        {/* VISIBLE: visible by default */}
        <Text>{props.todo.title}</Text>
      </View>
    </SwipeRow>
  )
}
