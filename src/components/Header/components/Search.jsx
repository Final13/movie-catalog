import React from "react";

const Search = ({ onChange }) => {
  return (
    <div style={{ width: '100%' }}>
      <input onChange={onChange} placeholder="Search" />
    </div>
  );
};

export default Search;