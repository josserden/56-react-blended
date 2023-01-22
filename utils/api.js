const KEY = '755b9c6082cc4d5d6e54f37544fe5f24';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();
  return data.results;
};
