import MainMenu from "../components/mainMenu";
import Footer from "../components/Footer";
import { Container,Row,Col } from "react-bootstrap";
function Error404(){
    return (
        <>
        <MainMenu/>
        <Container>
            <Row className="text-center">
                <Col>404</Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default Error404;