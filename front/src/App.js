import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";

import Footer from "./pages/Footer";
import NavHome from "./pages/NavHome";
import Quienes from "./pages/Quienes";

import Categoria from "./pages/Categoria";

import Cuento from "./pages/Cuento";

function App() {
  return (
    <div id="page-container">
      <div id="content-wrap">
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<NavHome />} />

          <Route path="/clasicos" element={<Categoria />} />
          <Route path="/contemporaneos" element={<Categoria />} />
          <Route path="/ruleta" element={<Categoria />} />
          <Route path="/notas" element={<Categoria />} />
          <Route path="/epistolas" element={<Categoria />} />

          <Route path="/cuento" element={<Cuento />} />
          <Route path="/quienes" element={<Quienes />} />
        </Routes>
      </Router>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
