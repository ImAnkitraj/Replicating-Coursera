import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Navbar({setSidebarStatus,sidebarStatus}) {
    return (
      <>
      <header>
        <a href="/"><img src="img/logo.svg" class="logo" alt="logo"/></a>
        <nav className='collapsenav'> 
            <ul class="nav-links">
                <li><input type='text' className='nav-search' placeholder='Serch Courses'></input><a className='search-icon'href='/search'>&nbsp;&nbsp;&nbsp;<i class="fas fa-search"></i></a></li>
                <li><NavLink to='/'><a href="/">Home</a></NavLink></li>
                <li><NavLink to='/courses'><a href="/courses">Courses</a></NavLink></li>
                <li><NavLink to='/login'><a href="/login" id="login" >Log In</a></NavLink></li>
                <li><NavLink to='/signup'><a href="/signup" id="signup"> Join For Free</a></NavLink></li> 
            </ul>
        </nav>
        <div onClick={()=>setSidebarStatus(!sidebarStatus)} class="menu-toggle">
            <i className='fa fa-bars'></i>
        </div>
        </header>
    </>
    );
}
