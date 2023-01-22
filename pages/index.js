import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../utils/api';

export default function Home({ movies }) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       const response = await fetchTrendingMovies();

  //       setMovies(response);
  //     } catch (error) {}
  //   };

  //   getMovies();
  // }, []);

  return (
    <ul>
      {movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
    </ul>
  );
}

export async function getStaticProps() {
  const movies = await fetchTrendingMovies();

  return {
    props: {
      movies,
    },
  };
}
