import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import api from '../service/api';
import Navbar from '../common/Navbar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de películas
    api.getMovies().then(data => setMovies(data));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {movies && movies.map((movie, index) => (
          <Card
            key={index} // Usar el índice como clave única
            title={movie.title}
            poster={movie.poster}
            genres={movie.genres}
            releaseDate={movie.releaseDate}
            trailerLink={movie.trailerLink}

            onClick={() => {
              api.getMovieById(movie.imdbId).then(movieData => {
                // Realizar acciones con los detalles de la película
                console.log(movieData);
                // Por ejemplo, redireccionar a la página de detalles
                // history.push(`/movie/${movie.id}`);
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
