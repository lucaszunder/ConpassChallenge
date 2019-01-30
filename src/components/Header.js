import React from 'react'
import logo from '../assets/logo.png';
import {Navbar, NavItem} from 'react-materialize'
export const Header = (props) => {
    const teste = ''
    return(
        <header className="App-header ">
            <img src={logo} className="App-logo" alt="Conpass Logo" />
            <Navbar className={['blue-grey darken-1 ',teste,'center-align']} >
                <NavItem className=''>Link Fake 1</NavItem>
                <NavItem className=''>Link Fake 2</NavItem>
                <NavItem className=''>Link Fake 3</NavItem>
                <NavItem className=''>Link Fake 4</NavItem>
            </Navbar>
        </header>
    )
}