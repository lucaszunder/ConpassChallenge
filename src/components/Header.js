import React from 'react'
import logo from '../assets/logo.png';
import {Navbar, NavItem} from 'react-materialize'
export const Header = (props) => {
    return(
        <header className="App-header ">
            <img src={logo} className="App-logo" alt="Conpass Logo" />
            <Navbar className={'blue-grey darken-3 links'} >
                <NavItem >Link Fake 1</NavItem>
                <NavItem >Link Fake 2</NavItem>
                <NavItem >Link Fake 3</NavItem>
                <NavItem >Link Fake 4</NavItem>
            </Navbar>
        </header>
    )
}