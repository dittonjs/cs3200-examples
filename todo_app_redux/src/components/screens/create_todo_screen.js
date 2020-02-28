import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/todos';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export class CreateTodoScreen extends React.Component {
  state = {
    title: '',
    description: '',
    location: '',
    startTime: '',
  }

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      marginTop: 16,
    }
  })

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    this.props.createTodo(
      this.state.title,
      this.state.description,
      this.state.location,
      this.state.startTime,
    );
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChangeText={text => this.update('title', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input
              value={this.state.description}
              onChangeText={text => this.update('description', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Location</Label>
            <Input
              value={this.state.location}
              onChangeText={text => this.update('location', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Start Time</Label>
            <Input
              value={this.state.startTime}
              onChangeText={text => this.update('startTime', text)}
            />
          </Item>
        </Form>
        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save}><Text>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  createTodo,
};

export default connect(null, mapPropsToDispatch)(CreateTodoScreen);
