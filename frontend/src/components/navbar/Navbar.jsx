

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assests/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
);

const Navbar = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const logout = () => {
    // Perform logout logic, e.g., by redirecting to the logout endpoint
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        {user ? (
          <ul className="flex flex-row items-center space-x-4 text-white">
            <li>
              <img
                src={user.photos[0].value}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </li>
            <li className="text-white">{user.displayName}</li>
            <li
              className="text-white cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        ) : (
          // If user is not logged in, show login link
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>

              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                {user ? (
                  <ul className="flex items-center space-x-4 text-white">
                    <li>
                      <img
                        src={user.photos[0].value}
                        alt=""
                        className="avatar w-8 h-8 rounded-full"
                      />
                    </li>
                    <li className="text-white">{user.displayName}</li>
                    <li
                      className="text-white cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                ) : (
                  // If the user is not logged in, show the login link
                  <Link className="text-blue-600" to="/login">
                    Login
                  </Link>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

