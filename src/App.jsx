import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Asegúrate de importar Navbar
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";  // Importa estilos globales

function App() {
  return (
    <Router>
      <Navbar /> {/* Aquí se muestra la barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
