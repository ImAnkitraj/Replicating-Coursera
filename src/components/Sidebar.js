import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar({setSidebarStatus,sidebarStatus}) {
    return (
        <div className='sidebar-container' onClick={()=>setSidebarStatus(!sidebarStatus)}>
            <div className='sidebar-panel' >
                <div class='sidebar-logo'>
                    <a href="/"><img src="img/logo.svg" class="logo" alt="logo"/></a>
                </div>
                <ul className='sidebar-links-container'>
                    <li className='sidebar-list'><NavLink to='/'><a href='/'className='sidebar-links'><i className='fas fa-home'></i> &nbsp;&nbsp;&nbsp;&nbsp;Home</a></NavLink></li>
                    <li className='sidebar-list'><NavLink to='/courses'><a href='/courses'className='sidebar-links'><i class="fab fa-discourse"></i>&nbsp;&nbsp;&nbsp;&nbsp;Coures</a></NavLink></li>
                    <li className='sidebar-list'><NavLink to='/forenterprise'><a href='/forenterprise' className='sidebar-links'><i class="fab fa-500px"></i>&nbsp;&nbsp;&nbsp;&nbsp;For Enterprise</a></NavLink></li>
                    <li className='sidebar-list'><NavLink to='/login'><a href='/login' className='sidebar-links'><i class="fa fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;Login</a></NavLink></li>
                    <li className='sidebar-list'><NavLink to='/signup'><a href='/signup' className='sidebar-links'><i class="fa fa-sign"></i>&nbsp;&nbsp;&nbsp;&nbsp;Signup</a></NavLink></li>
                </ul>
            </div>
            <div className='sidebar-overlay'>
            </div>
        </div>
    )
}
