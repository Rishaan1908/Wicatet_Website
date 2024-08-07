import React, { useContext } from 'react';
import { WishlistContext } from '../Products/WishlistContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h2>Account</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate('/edit-account')}>Edit Account</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;