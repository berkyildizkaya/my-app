import React from "react";
import  Container  from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  Link } from 'react-router-dom';
function MainMenu(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Lenax</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar"/>
                <NavbarCollapse id="responsive-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Anasayfa</Nav.Link>
                        <Nav.Link as={Link} eventKey="/About" to="/About">Hakkımda</Nav.Link>
                        {/* <Nav.Link as={Link} to="/">İletişim</Nav.Link> */}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </>
    )
}


export default MainMenu;