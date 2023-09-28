import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import About from './pages/About';
import Error404 from './pages/Error404';
import reportWebVitals from './reportWebVitals';
import { Routes,BrowserRouter,Route} from "react-router-dom";
// import Liste from './Liste';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
	      <Route path="/" element={<App />} />
	      <Route path="/About" element={<About />} />
	      <Route path="*" element={<Error404 />} />
      </Routes>
  </BrowserRouter>
    {/* <App>
    </App> */}
</React.StrictMode> 
);
reportWebVitals();
