import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dream from './Dream';
import Card1 from './Card1';
import Home from './Home';
<<<<<<< HEAD
import Marqure from './Marqure';
import Autotext from './Autotext';
import Corcal from './Corcal';
=======
import Gridview from './Gridview';
import Review from './review';
import Glim from './glim';
>>>>>>> e03efdede15132d211c53fe158e710b2f63e6a25
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Navbar2 />} />
=======
          <Route path="/" element={<Navbar />} />
>>>>>>> e03efdede15132d211c53fe158e710b2f63e6a25
          <Route path="foter" element={<Footer />} />
          <Route path="dream" element={<Dream />} />
          <Route path="card" element={<Card1 />} />
          <Route path="home" element={<Home />} />
>>>>>>> 0f61cb9264cc7dcff42b3c2aa6c64c5c00cbd981

>>>>>>> e03efdede15132d211c53fe158e710b2f63e6a25
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
