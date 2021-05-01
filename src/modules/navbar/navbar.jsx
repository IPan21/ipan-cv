
import React from "react";
import './components/navbar.css';
import { NavbarTitle } from './components/navbarTitle';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from './components/homeIcon';
import { AboutIcon } from './components/aboutIcon';
import { ContactsIcon } from './components/contactsIcon';

function Navbar(props) {
        return (
            <header className='navbar'>
                <NavbarTitle/>
                <NavLink exact to='/about' className="navbar-item" activeClassName="navbar-icon-active"><AboutIcon/></NavLink>
                <NavLink to='/contacts' className="navbar-item" activeClassName="navbar-icon-active" onClick={(e) => {if('/contacts' === props.history.location.pathname){e.preventDefault()}}}><ContactsIcon/></NavLink>
                <NavLink exact to='/' className="navbar-item" activeClassName="navbar-icon-active" fill='red'><HomeIcon/> </NavLink>     
            </header>
          );
}

export default withRouter(Navbar);
      