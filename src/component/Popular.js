import React, { useEffect, useState } from "react";
import "../component/MovieList.css";

const Popular = () => 
  {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjU5NDRjMGZhMDM2OTdlYjI1NmU4ZTg0MTZlOWIwMCIsIm5iZiI6MTc2MjQ5MDA4NC4yNTUsInN1YiI6IjY5MGQ3NmU0ODM2MTM4NTJhMmNlNzljMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aFHNGeKrD-ISEfMeFaGyK1somaOq3o1RpTih23ah8os",
        },
      };

      try 
      {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        setMovies(data.results || []);
      } 
      catch (err) 
      {
        setError(err.message);
      } finally 
      {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="movie-container">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
