import React from "react";
import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
function Footer(){
    return(
        <Container  fluid className="text-center bg-dark text-light mt-3 p-5">
            2023 @ <a href="https://github.com/berkyildizkaya"><BsGithub></BsGithub></a>
        </Container>
    )
}
export default Footer;