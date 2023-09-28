import MainMenu from "../components/mainMenu";
import Footer from "../components/Footer";
// import { Container,Row,Col } from "react-bootstrap";
import { Box,Container, Paper } from "@mui/material";
function About(){
    return (
        <>
        <MainMenu/>
        <Container maxWidth="sm">
            <Box  sx={{backgroundColor:'primary.dark',display:'flex'}}>
                <Paper variant="outlined"/>
                asdadas
            </Box>
        </Container>
        {/* <Container>
            <Row className="text-center">
                <Col>About Page</Col>
            </Row>
        </Container> */}
        <Footer/>
        </>
    )
}
export default About;
