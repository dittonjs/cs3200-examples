import React from 'react';
import { Text, StatusBar, SafeAreaView, Button, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    todos: [],
    currentTodoValue: '',
  }

  addTodo = () => {
    this.setState((state) => {
      state.todos.push(this.state.currentTodoValue)
      state.currentTodoValue = '';
      return state;
    });
  }


  handleInputChange = (currentTodoValue) => {
    this.setState({ currentTodoValue })
  }

  todoItems() {
    return this.state.todos.map((todo) => (
      <View key={todo}><Text>{todo}</Text></View>
    ));
  }


  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        {this.todoItems()}
        <Button title="Add todo" onPress={this.addTodo} />
        <TextInput
          value={this.state.currentTodoValue}
          onChangeText={this.handleInputChange}
        />
      </SafeAreaView>
    )
  }
}
