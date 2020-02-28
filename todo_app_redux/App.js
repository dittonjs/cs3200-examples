import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Button, Text, Container } from 'native-base';
import TodoListScreen from './src/components/screens/todo_list_screen';
import CreateTodoScreen from './src/components/screens/create_todo_screen';
import store from './src/store/store';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Todo List"
              component={TodoListScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create Todo')}>
                      <Text>New</Text>
                    </Button>
                  </Container>
                )
              })}
            />
            <Stack.Screen name="Create Todo" component={CreateTodoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
