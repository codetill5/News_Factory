import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sass/main.css';
import menuIcon from './assets/images/menuIcon.png';

const Menu = ()=>{
    return(
        <>
        <br/>
        <div className="navContainer">
            {/* <hr /> */}
        <NavLink className="NavBar" to='/' ><img src={menuIcon} /></NavLink>
        <NavLink className="NavBar" to='/'>World</NavLink>
        <NavLink className="NavBar" to='/US'>U.S.</NavLink>
        <NavLink className="NavBar" to='/Politics'>Politics</NavLink>
        <NavLink className="NavBar" to='/Business'>Business</NavLink>
        <NavLink className="NavBar" to='/Tech'>Tech</NavLink>
        <NavLink className="NavBar" to='/Sports'>Sports</NavLink>
        <NavLink className="NavBar" to='/Food'>Food</NavLink>
        <NavLink className="NavBar" to='/Tech'>Arts</NavLink>
        <NavLink className="NavBar" to='/Sports'>Travel</NavLink>
        <NavLink className="NavBar" to='/Food'>Real Estate</NavLink>
        <NavLink className="NavBar" to='/Food'>Health</NavLink>
        {/* <hr /> */}
        </div>
        </>
    );
};

export default Menu;