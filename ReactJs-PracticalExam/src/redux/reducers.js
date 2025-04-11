import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, SET_LOADING, SET_ERROR } from "./actions";

const initialState = {
  movies: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload, loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default movieReducer;