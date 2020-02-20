import React from 'react';
import { SafeAreaView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Text, Button } from 'native-base';

export default class HomePage1 extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Text>Hello, from the first home page!</Text></Col>
          <Col><Text>Hello, from the first home page column 2!</Text></Col>
        </Row>
        <Row>
            <Button
              onPress={() => this.props.navigation.navigate("Home Page 2")}
              style={{ alignItems: 'center' }}
              rounded
            >
              <Text >Click Me!</Text>
            </Button>
        </Row>
      </Container>
    );
  }
}
