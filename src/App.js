import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Dream from './Dream';
import Card1 from './Card1';
=======
import Home from './Home';
>>>>>>> 0f61cb9264cc7dcff42b3c2aa6c64c5c00cbd981
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="foter" element={<Footer />} />
<<<<<<< HEAD
          <Route path="dream" element={<Dream />} />
          <Route path="card" element={<Card1 />} />
=======
          <Route path="home" element={<Home />} />
>>>>>>> 0f61cb9264cc7dcff42b3c2aa6c64c5c00cbd981

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
