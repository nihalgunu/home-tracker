import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg ="dark" variant="dark" expand="lg">
        <Container fluid> 
            <Navbar.Brand href="/" style={{"color":'gold'}}>  
                <FontAwesomeIcon icon = {faHouse}/>God   
            </Navbar.Brand>
            <NavbarToggle aria-control="navbarScroll"/>
            <Navbar.Collapse id = "navbarScroll">
                <Nav 
                className="me-auto my-2 my-lg-0"
                style={{maxHeight: '100px'}}
                navbarScroll> 
                    <NavLink className = "nav-link" to="/"> Home </NavLink>
                    <NavLink className = "nav-link" to="/reccomendations"> Reccomendations </NavLink>
                </Nav>
                <Button variant= "outline-info" className = "me-2"> Login </Button>
                <Button variant= "outline-info" className = "me-2"> Register </Button>
            </Navbar.Collapse>

        </Container>   
    </Navbar>
  )
}

export default Header