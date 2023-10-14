import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </NavLink>

        <div className="header__search">
            <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon " />

        </div>

        <div className="header__nav">
        <NavLink to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
               <span className="header__optionLineOne">
                Hello, {!user ? 'Guest' : user.email}
               </span>
               <span className="header__optionLineTwo">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </NavLink>

            <div className="header__option">
               <span className="header__optionLineOne">
                Returns
               </span>
               <span className="header__optionLineTwo">
                & Orders
               </span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">
               Your
                </span>
                <span className="header__optionLineTwo">
               Prime
                </span>
               
            </div>

            <div className="header__option">
              <NavLink to="/Checkout">
              <ShoppingCartIcon className="header__shoppingCart" />
              </NavLink>
              <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
            </div>

        </div>

    </div>

  )
}

export default Header;