import React from "react";
import Site from "./components/Site";
import Search from "./components/Search";
import User from "./components/User";

const Header = ({ user, siteName }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        backgroundColor: '#b9dbed'
      }}
    >
      <Site siteName={siteName} />
      <Search />
      <User user={user} />
    </div>
  );
};

export default Header;