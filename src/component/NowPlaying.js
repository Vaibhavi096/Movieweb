import React, { useEffect, useState } from "react";
import "../component/MovieList.css";

const NowPlaying = () => 
  {
  const [movies, setMovies] = useState([]);

  useEffect(() => 
    {
      const fetchMovies = async () => 
      {
      const options = 
      {
        method: "GET",
        headers: 
        {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`, // ✅ Add this line
        },
      };

      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data); // optional - to see full API response
          setMovies(data.results || []);
        })
        .catch((err) => console.error(err));
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      <h1>Now Playing</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/no-image.jpg"
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
