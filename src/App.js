import logo from './logo.svg';
import './App.css';
import Carrito from './carrito';
import Devolucion from './devolucion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Carrito />} />
          <Route path="/devolucion" element={<Devolucion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/* Si no funciona el codigo instalar lo siguiente:
npm install react-router-dom
wajajaja
*/