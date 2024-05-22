import React, { useEffect, useState } from "react";
import Header from "./Header";

const MoviesPage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then(res => res.json())
      .then(res => setUser(res));
  })
  const siteName = 'Movie Catalog';
  return (
    <>
      <Header siteName={siteName} user={user} />
      <div>
        Movies
      </div>
    </>
  );
};

export default MoviesPage;