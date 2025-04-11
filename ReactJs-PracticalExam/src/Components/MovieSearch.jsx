import React, { useState } from "react";
import axios from "axios";

const API_KEY = "bb114ba2f990055a01e78304b515d7b9";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    setResults(response.data.results);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;

