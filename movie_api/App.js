import React from 'react';
import _ from 'lodash';
import { SafeAreaView, Text, FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';
import MoviesService from './src/services/movies.service';
import MovieListItem from './src/components/movie_list_item';

export default class App extends React.Component {
  state = {
    currentPage: 1,
    movies: [],
    loading: true,
    allLoaded: false,
    searchTerm: '',
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textInput: {
      margin: 16,
      borderBottomWidth: 1
    }
  });

  constructor() {
    super();
    this.getMoviesFromSearchQuery = _.debounce(this.getMoviesFromSearchQuery, 1000)
  }

  getMoviesFromSearchQuery = async () => {
    try {
      const movies = await MoviesService.search(this.state.searchTerm, 1);
      this.setState({ movies, loading: false, currentPage: 1 });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm === this.state.searchTerm) return;
    this.getMoviesFromSearchQuery();
  }

  loadMoreMovies = () => {
    console.log("LOAD MORE MOVIES CALLED", this.state.currentPage);

    if (this.state.loading) return;
    if (this.state.allLoaded) return;

    this.setState(
      { loading: true },
      async () => {
        try {
          const newMovies = await MoviesService.search(this.state.searchTerm, this.state.currentPage + 1);
          this.setState((state) => {
            const newState = {...state};
            newState.movies = [...state.movies, ...newMovies];
            newState.currentPage = state.currentPage + 1;
            newState.loading = false;
            if (newMovies.length === 0) {
              newState.allLoaded = true;
            }
            return newState;
          });
        } catch(e) {
          console.log(e);
        }
      }
    )
  }

  render() {
    return (
      <SafeAreaView style={this.styles.container}>
        <TextInput
          value={this.state.searchTerm}
          style={this.styles.textInput}
          onChangeText={newText => this.setState({ searchTerm: newText, movies: [] })}
        />
        <FlatList
          data={this.state.movies}
          renderItem={(dataEntry) => {
            return <MovieListItem movie={dataEntry.item} />
          }}
          onEndReached={this.loadMoreMovies}
          keyExtractor={(movie) => `movie_${movie.id}`}
        />
      </SafeAreaView>
    );
  }
}
