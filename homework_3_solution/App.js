import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import GamePage from './components/pages/game_page';
import EndGamePage from './components/pages/end_game_page';
import StartLevelPage from './components/pages/start_level_page';

export default class AppContainer extends React.Component {
  state = {
    route: 'start_level_page',
    routeParams: {
      level: 1,
      gameState: null,
    },
  }

  routes = {
    'start_level_page': StartLevelPage,
    'game_page': GamePage,
    'end_game_page': EndGamePage,
  }



  get currentPageComponent() {
    const RouteComponent = this.routes[this.state.route];
    return (
      <RouteComponent
        navigateTo={this.navigateTo}
        routeParams={this.state.routeParams}
      />
    );
  }

  navigateTo = (route, routeParams = this.state.routeParams) => {
    this.setState({ route, routeParams });
  }

  render() {
    return (
      this.currentPageComponent
    );
  }
}
