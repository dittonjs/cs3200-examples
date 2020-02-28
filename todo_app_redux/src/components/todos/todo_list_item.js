import React from 'react';
import { ListItem, Text } from 'native-base';

export default class TodoListItem extends React.Component {
  render() {
    console.log(this.props.todo);
    return (
      <ListItem>
        <Text>{this.props.todo.title}</Text>
      </ListItem>
    );
  }
}
