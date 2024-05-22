import React from "react";

const Search = ({ onChange }) => {
  return (
    <div style={{ width: '100%' }}>
      <input style={{ width: '100%' }} onChange={onChange} placeholder="Search" />
    </div>
  );
};

export default Search;