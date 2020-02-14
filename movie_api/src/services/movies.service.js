
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmUwM2FkYzBmMzkyZGZjN2U5NGJiZjkzZWNiMmVmOSIsInN1YiI6IjVlNDA5OGY1NDE0NjVjMDAxYWNjZGNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9oCZJVoQ55cIr2RWlt4I_3OMQOffFiE9T9WUh7mk6j4';
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class MoviesService {

  static async search(searchTerm, pageNumber = 1) {
    const result = await fetch(
      `${ROOT_URL}/search/movie?query=${searchTerm}&page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8',
        }
      }
    );

    if (result.status === 404) throw new Error('Page not found');
    const resultJson = await result.json();
    return resultJson.results;
  }

}
