import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar fixed="top"  style={{ backgroundColor: "rgba(3,2,12,0.9)",zIndex:"100"}}  expand="md">
                <Container>
                    <Navbar.Brand className="text-white" >
                    <NavLink className="pl-4 text-white" to="/">  POWER <span style={{color:"#fcd842"}}>X</span></NavLink>
                      </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink activeStyle={{ fontWeight: "bold", color: "green!important" }} exact className="pl-4 text-white" to="/home">Home</NavLink>
                            <NavLink className="pl-4 text-white" activeStyle={{ fontWeight: "bold", color: "green!important" }} exact to="/ourClasses">Our Classes</NavLink>
                            <NavLink className="pl-4 text-white" activeStyle={{ fontWeight: "bold", color: "green!important" }} exact to="/pricing">Pricing</NavLink>
                            <NavLink className="pl-4 text-white" activeStyle={{ fontWeight: "bold", color: "green!important" }} exact to="/">Contact Us</NavLink>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;