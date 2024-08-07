import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { findUser, setCurrentUser } from '../DataBase';
import { WishlistContext } from '../Products/WishlistContext';

const Login = () => {
  const { user, setUser, setWishlist } = useContext(WishlistContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = findUser(email);

    if (foundUser && foundUser.password === password) {
      setCurrentUser(foundUser);
      setUser(foundUser);
      setWishlist(foundUser.wishlist);
      navigate('/account');
    } else {
      setError('Invalid email or password');
    }
  };

  if (user) {
    navigate('/account');
    return null;
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
