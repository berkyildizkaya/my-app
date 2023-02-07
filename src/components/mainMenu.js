import React from "react";
import  Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainMenu(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#AnaSayfa">Anasayfa</Nav.Link>
                    <Nav.Link href="#Galeri">Galeri</Nav.Link>
                    <Nav.Link href="#Contact">İletişim</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}


export default MainMenu;