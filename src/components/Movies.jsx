import React from "react";

const Movies = ({ movies = [] }) => {
  if (!movies.length) return;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}
    >
      {movies.map(movie => (
        <div style={{ margin: 4, flex: 'calc(20% - 8px)' }} key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} style={{ objectFit: 'contain' }} />
          {['Title', 'Year', 'imdbID', 'Type'].map(key => (
            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              {`${[key]}: ${movie[key]}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;