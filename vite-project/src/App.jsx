
import {BrowserRouter as Router, Routes,Route, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hakkimda" element={<Home/>}/>
          <Route path="/detail/:persID" element={<Detail/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
