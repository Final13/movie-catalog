import React from "react";

const Site = ({ siteName = '' }) => {
  return (
    <div style={{ minWidth: 300, fontSize: 30, fontWeight: 500 }}>
      {siteName}
    </div>
  );
};

export default Site;