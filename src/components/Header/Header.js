import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import { auth } from '../../firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <img
          className='logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo'
        />
      </Link>

      <div className='headersearch'>
        <input type='text' className='searchtext' />
        <SearchIcon className='searchIcon' />
      </div>
      <div className='headernav'>
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthenticaton} className='headeroptions'>
            <span
              className='header1'
              style={{ fontSize: '0.8rem', fontWeight: '600' }}
            >
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header2'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/orders' style={{ textDecoration: 'none' }}>
          <div className='headeroptions'>
            <span className='header1'>Returns</span>
            <span className='header2'>& Orders</span>
          </div>
        </Link>
        <div className='headeroptions'>
          <span className='header1'>Your</span>
          <span className='header2'>Prime</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='headerbasket'>
            <ShoppingCartIcon />
            <span className='header2 basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
