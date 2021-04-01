import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firabase.utils';
import { connect } from 'react-redux';
import CardIcon from '../CardIcon/CardIcon';

import './Header.scss';
import CardDropDown from '../CardDropDown/CardDropDown';


const Header = ({currentUser, hidden}) => {

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        {
          currentUser
          ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link to="/signin" className="option">SIGN IN</Link>
        }
        <CardIcon />
      </div>
        {hidden ? null : <CardDropDown />}
    </div>
  )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
