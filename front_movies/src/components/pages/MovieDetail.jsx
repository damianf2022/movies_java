import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import api from '../services/api';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = match.params.id;
    // Llamada a la API para obtener los detalles de la película por ID
    api.getMovieById(movieId).then(data => setMovie(data));
  }, [match.params.id]);

  return (
    <div className="movie-detail">
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.releaseDate}</p>
          <p>Géneros: {movie.genres.join(', ')}</p>
          <Button text="Ver Tráiler" onClick={() => window.open(movie.trailerLink, '_blank')} />
        </>
      )}
    </div>
  );
};

export default MovieDetail;
