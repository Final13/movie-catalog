import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Movies from "./Movies";
import Pagination from "./Pagination";

const MoviesPage = () => {
  const [user, setUser] = useState({});
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then(res => res.json())
      .then(res => setUser(res));
  }, [])
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${search}&page=${page}`)
      .then(res => res.json())
      .then(res => {
        Array.isArray(res.Search) ? setMovies(res.Search) : setMovies([res]);
        if (res.Error) setMovies([]);
        setTotal(res.totalResults || undefined);
        setLoading(false);
      });
  }, [search, page])

  const siteName = 'Movie Catalog';
  const handleChangeSearch = (event) => {
    if (event.target.value.length > 2) {
      setLoading(true);
      setSearch(event.target.value);
    }
  }
  return (
    <>
      <Header siteName={siteName} user={user} onChange={handleChangeSearch} />
      <SearchResults total={total} search={search} />
      <Movies movies={movies} loading={loading} />
      <Pagination
        total={total}
        onChange={val => {
          setPage(val);
          setLoading(true);
        }}
      />
    </>
  );
};

export default MoviesPage;