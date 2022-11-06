import axios from 'axios';

const key = '95408910f155fe255f0189c2b661e1f4';

export const getMoviesList = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

  try {
    const movies = await axios.get(url);
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieInfo = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;

  try {
    const movies = await axios.get(url);
    return movies.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`;

  try {
    const movies = await axios.get(url);
    return movies.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReview = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US`;

  try {
    const movies = await axios.get(url);
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovie = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const movies = await axios.get(url);
    return movies.data.results;
  } catch (error) {
    console.log(error);
  }
};
