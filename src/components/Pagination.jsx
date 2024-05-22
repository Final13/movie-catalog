import React, { useState } from "react";

const Pagination = ({ total, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!total) return;
  const pagesCount = Math.ceil(total / 10);
  let pages = [...Array(pagesCount).keys().map(x => x += 1)];
  if (pagesCount > 20) {
    pages = pages.slice(currentPage - 5 > 0 ? currentPage - 5 : 0, currentPage + 5);
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <i
        style={{
          border: 'solid black',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 3,
          transform: 'rotate(135deg)',
          WebkitTransform: 'rotate(135deg)',
          marginLeft: 8,
          cursor: 'pointer',
        }}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            onChange?.(currentPage - 1)
          };
        }}
      />
      {pages.map(page => (
        <div
          style={{ margin: 4, fontWeight: currentPage === page ? 800 : 'normal', cursor: 'pointer' }}
          onClick={() => {
            setCurrentPage(page);
            onChange?.(page);
          }}
        >
          {page}
        </div>
      ))}
      <i
        style={{
          border: 'solid black',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 3,
          transform: 'rotate(315deg)',
          WebkitTransform: 'rotate(315deg)',
          marginLeft: 8,
          cursor: 'pointer',
        }}
        onClick={() => {
          if (currentPage < pagesCount) {
            setCurrentPage(currentPage + 1);
            onChange?.(currentPage + 1);
          }
        }}
      />
    </div>
  );
};

export default Pagination;