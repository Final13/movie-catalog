import React from "react";

const Movies = ({ movies = [], loading = false, error = '' }) => {
  if (error) return <div style={{ fontSize: 100 }}>{error}</div>;
  if (loading) return <div style={{ fontSize: 100 }}>Loading</div>;
  if (!movies.length) return <div style={{ fontSize: 100 }}>Not results found</div>;
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
          <img src={movie?.Poster !== 'N/A' ? movie?.Poster : 'https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg'} alt={movie.Title} style={{ objectFit: 'contain' }} />
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