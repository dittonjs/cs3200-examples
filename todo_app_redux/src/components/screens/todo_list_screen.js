import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import TodoListItem from '../todos/todo_list_item';
import { getTodos, deleteTodo } from '../../actions/todos';

export class TodoListScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  state = {
    loadedName: 'Joseph',
  }
  // PRIMITIVE EXAMPLE OF STORAGE
  // async componentDidMount() {
  //   const info = {
  //     name: 'Joseph',
  //     birthday: '01/01/2001',
  //   };
  //   await AsyncStorage.setItem("@todo_app_user_name", JSON.stringify(info));
  //   const loadedInfoJsonString = await AsyncStorage.getItem("@todo_app_user_name");
  //   const parsedInfo = JSON.parse(loadedInfoJsonString);
  //   this.setState({ loadedName: parsedInfo.name });
  //   console.log(parsedInfo);
  // }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.todos.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome {this.state.loadedName}!</H1>
          <Text>You do not have any todos yet, click the "New" button at the top to add a new todo.</Text>
        </Container>
      )
    }

    return (
      <Container>
        <FlatList
          data={this.props.todos}
          renderItem={({item}) => (
            <TodoListItem
              todo={item}
              navigation={this.props.navigation}
              deleteTodo={this.props.deleteTodo}
            />
          )}
          keyExtractor={item => `todo_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    todos: storeState.todos,
  }
};

// select = ({ todos }) => ({ todos });

export default connect(select, { getTodos, deleteTodo })(TodoListScreen);
