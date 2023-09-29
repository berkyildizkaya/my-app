import { Container, Nav,Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>BERK YILDIZKAYA</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link onClick={() => navigate("/")}>Anasayfa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => navigate("/hakkimda")}>Hakkımda</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
