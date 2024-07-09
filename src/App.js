import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Navbar2 />} />
          <Route path="foter" element={<Footer />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
