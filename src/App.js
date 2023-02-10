// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/mainMenu';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <MainMenu/>
      <Content></Content>
      <Footer/>
    </div>
  );
}

export default App;
