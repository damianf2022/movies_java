import React from 'react';

const Card = ({ title, genres, releaseDate, trailerLink, poster,onClick }) => {
  return (
    <div className="max-w-md h-full mx-auto bg-white shadow-md rounded-lg overflow-hiddencursor-pointer" onClick={onClick}>
      <img className="object-cover w-full h-55" src={poster} alt={`${title} Poster`} style={{ objectPosition: 'center top' }} />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">Géneros:</p>
        <ul className="flex flex-wrap gap-2">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="bg-gray-200 py-1 px-2 text-sm rounded-full"
              style={{ maxWidth: 'calc(100% - 0.5rem)' }} // Ajuste del ancho máximo
            >
              {genre}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-2">
          <a href={trailerLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Ver Tráiler
          </a>
          <span className="text-gray-500">Fecha de Lanzamiento: {releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
