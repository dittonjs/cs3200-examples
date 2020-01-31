import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import WelcomePage from './components/welcome_page';
import StopwatchPage from './components/stopwatch_page';

export default class AppContainer extends React.Component {
  state = {
    route: 'welcome',
  }

  // A MORE ROBUST BUT MORE ADVANCED WAY OF DETERMINING ROUTES
  // ===============================================================
  // routes = {
  //   'welcome': WelcomePage,
  //   'stopwatch': StopwatchPage,
  // }
  //
  // get currentPageComponent() {
  //   // NOTICE THIS THIS STARTS WITH A CAPITAL C!!
  //   const RouteComponent = this.routes[this.state.route];
  //   return <RouteComponent navigateTo={this.navigateTo} />
  // }
  // ===============================================================

  get currentPageComponent() {
    if (this.state.route === 'welcome') {
      return <WelcomePage navigateTo={this.navigateTo} />;
    } else if (this.state.route === 'stopwatch') {
      return <StopwatchPage navigateTo={this.navigateTo} />;
    }
    return <Text>Page not found</Text>;
  }

  navigateTo = (route) => {
    this.setState({ route });
  }

  render() {
    return (
      <SafeAreaView>
        {this.currentPageComponent}
      </SafeAreaView>
    );
  }
}
