import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Components/layout/NavBar";
import Sozinho from "./Components/sozinho";
import ComAmigo from "./Components/ComAmigo";
import PagInicial from "./Components/PagInicial";
import PaginaInicial from "./Components/paginaInicial";
function App() {
  return (
    <div className="App">
      <Router>
      <PagInicial />
      
        <Routes>
          {/* <Route path="/" element={<PagInicial />} /> */}
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/sozinho" element={<Sozinho />} />
          <Route path="/amigo" element={<ComAmigo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
