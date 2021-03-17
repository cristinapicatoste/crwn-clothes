import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/userContext';

import './Header.scss';

const Header = () => {
  const { userLogged, setUserLogged, handleLoggout } = useContext(UserContext)

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        <Link to="/signin" className="option" onClick={handleLoggout}>SIGN IN</Link>
        <Link to="/" className="option" onClick={handleLoggout}>LOG OUT</Link>
      </div>
    </div>
  )
}

export default Header
