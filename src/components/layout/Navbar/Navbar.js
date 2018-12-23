import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Links from './Links/Links';
import classes from './Navbar.module.css';


const navbar = () => {
  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Logo />
                <Search/>
                <Links/>
                </div>
            </nav>
        </div>
    );
}


export default navbar;