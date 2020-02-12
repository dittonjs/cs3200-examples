import React from 'react';
import _ from 'lodash';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import GameRow from '../game/game_row';
import ScoreBoard from '../game/score_board';
import Colors from '../common/colors';

const ROWS = 8;
const COLS = 5;

export default class GamePage extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })

  state = {
    grid: null,
    score: 0,
    loading: true,
  }

  componentDidMount() {
    this.setState({
      grid: this.buildGrid(),
      loading: false,
    });
  }

  getRandomColor() {
    return _.sample(Colors.tileColors);
  }

  buildGrid() {
    let stack = _.fill(Array(COLS * ROWS), false);
    stack[0] = true;
    stack = _.shuffle(stack);
    const grid = _.map(_.range(0, ROWS), () => {
      return _.map(_.range(0, COLS), () => {
        const isTarget = stack.pop();
        return {
          isTarget,
          color: isTarget ? Colors.primary : this.getRandomColor(),
        }
      }
    )});
    return grid;
  }

  handleTilePress = (isTarget) => {
    if (isTarget) {
      this.setState((state) => ({
        score: state.score + 1,
        grid: this.buildGrid()
      }));
    } else {
      this.props.navigateTo('end_game_page', { gameState: 'wrongTile' });
    }
  }

  handleTimeExpired = () => {
    const { navigateTo, routeParams } = this.props;
    const { score } = this.state;
    if (score >= 10 && routeParams.level === 1) {
      this.props.navigateTo('start_level_page', {
        level: 2
      });
    } else {
      this.props.navigateTo('end_game_page', {
        gameState: score >= 10 ? 'win' : 'outOfTime',
      });
    }
  }

  get rowComponents() {
    return _.map(this.state.grid, (columns, i) => {
      return (
        <GameRow
          columns={columns}
          handleTilePress={this.handleTilePress}
          level={this.props.routeParams.level}
          key={`row_${i}`}
        />
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView><Text>Loading...</Text></SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={this.styles.container}>
        <ScoreBoard onTimeExpired={this.handleTimeExpired} score={this.state.score} />
        {this.rowComponents}
      </SafeAreaView>
    );
  }
}
