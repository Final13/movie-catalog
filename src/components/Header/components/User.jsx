import React, { useState } from "react";

const User = ({ user = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`;
  const avatar = user.image || 'http://www.gravatar.com/avatar';
  const menuData = [
    { key: 'Email', value: user.email },
    { key: 'BirthDate', value: user.birthDate },
    { key: 'City', value: user.address?.city },
  ];
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 300 }}>
      <img style={{ width: 40, height: 40, border: '1px solid gray', borderRadius: '50%', marginRight: 8 }} src={avatar} alt={fullName} />
      <div>{fullName}</div>
      <div style={{ position: 'relative' }}>
        <i
          style={{
            border: 'solid black',
            borderWidth: '0 3px 3px 0',
            display: 'inline-block',
            padding: 3,
            transform: 'rotate(45deg)',
            WebkitTransform: 'rotate(45deg)',
            marginLeft: 8,
          }}
          onClick={handleMenuOpen}
        />
        {isMenuOpen ? (
          <div style={{ position: 'absolute', right: 0, top: 40, width: 'max-content' }}>
            {menuData.map(({ key, value }) => <div key={`${key}-${value}`}>{`${key}: ${value}`}</div>)}
          </div>
        ) :
          ''}
      </div>
    </div>
  );
};

export default User;