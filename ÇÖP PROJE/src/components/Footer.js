import React from "react";
import { Container,Nav } from "react-bootstrap";
import { BsGithub,BsBehance, BsLinkedin} from "react-icons/bs";

function Footer(){
    return(
        <Container  fluid className="text-center bg-dark text-light mt-3 p-5">
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="http://github.com/berkyildizkaya"><BsGithub/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="http://behance.com/berkyildizkaya"><BsBehance/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/in/berkyildizkaya/"><BsLinkedin/></Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}
export default Footer;