import MainMenu from "../components/mainMenu";
import Footer from "../components/Footer";
import { Container,Row,Col } from "react-bootstrap";
function About(){
    return (
        <>
        <MainMenu/>
        <Container>
            <Row className="text-center">
                <Col>About Page</Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default About;