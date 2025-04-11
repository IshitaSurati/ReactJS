import axios from "axios";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

const API_KEY = "bb114ba2f990055a01e78304b515d7b9";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
