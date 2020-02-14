import React from 'react';
import { SafeAreaView, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import MoviesService from './src/services/movies.service';
import MovieListItem from './src/components/movie_list_item';

export default class App extends React.Component {
  state = {
    currentPage: 1,
    movies: [],
    loading: true,
    allLoaded: false,
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

  async componentDidMount() {
    try {
      const movies = await MoviesService.search('Star Wars', 1);
      this.setState({ movies, loading: false })
    } catch (e) {
      console.log(e);
    }
  }

  loadMoreMovies = () => {
    console.log("LOAD MORE MOVIES CALLED", this.state.currentPage);

    if (this.state.loading) return;
    if (this.state.allLoaded) return;

    this.setState(
      { loading: true },
      async () => {
        try {
          const newMovies = await MoviesService.search('Star Wars', this.state.currentPage + 1);
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
