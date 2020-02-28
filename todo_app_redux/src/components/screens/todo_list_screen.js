import React from 'react';
import { connect } from 'react-redux';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import TodoListItem from '../todos/todo_list_item';

export class TodoListScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  render() {
    if (this.props.todos.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You do not have any todos yet, click the "New" button at the top to add a new todo.</Text>
        </Container>
      )
    }

    return (
      <Container>
        <FlatList
          data={this.props.todos}
          renderItem={({item}) => (
            <TodoListItem todo={item} />
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

export default connect(select)(TodoListScreen);
