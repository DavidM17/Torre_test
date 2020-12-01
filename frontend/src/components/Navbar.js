import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img className="logo-torre" src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/teletrabajo/torre.png"></img>

              Torre

            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Jobs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/people'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  People
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/analytic'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Analytics
                </Link>
              </li>

            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
