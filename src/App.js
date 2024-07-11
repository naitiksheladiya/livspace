import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Marqure from './Marqure';
import Autotext from './Autotext';
import Corcal from './Corcal';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar2 />} />
          <Route path="foter" element={<Footer />} />
          <Route path="home" element={<Home />} />
          <Route path="marquri" element={<Marqure />} />
          <Route path="auto" element={<Autotext />} />
          <Route path="cart" element={<Corcal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
