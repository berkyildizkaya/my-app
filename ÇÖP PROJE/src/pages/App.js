// import logo from './logo.svg';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '../components/mainMenu';
import Footer from '../components/Footer';
import {Container} from "react-bootstrap";
import Slider from '../components/Slider';
function App() {
  return (
    <div>
      <MainMenu/>
        <Container className="mt-3">
          <Slider/>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;
