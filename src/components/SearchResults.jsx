import React from "react";

const SearchResults = ({ total, search }) => {
  if (!total && !search) return;
  return (
    <p style={{ fontSize: 30, fontWeight: 500 }}>
      {`You searched for: ${search}, ${total} results found`}
    </p>
  );
};

export default SearchResults;