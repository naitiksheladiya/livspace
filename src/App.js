import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dream from './Dream';
import Card1 from './Card1';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="foter" element={<Footer />} />
          <Route path="dream" element={<Dream />} />
          <Route path="card" element={<Card1 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
