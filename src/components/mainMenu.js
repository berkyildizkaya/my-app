import React from "react";
import  Container  from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu(){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Lenax</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar"/>
                <NavbarCollapse id="responsive-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#AnaSayfa">Anasayfa</Nav.Link>
                        <Nav.Link href="#Galeri">Galeri</Nav.Link>
                        <Nav.Link href="#Contact">İletişim</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
        </>
    )
}


export default MainMenu;