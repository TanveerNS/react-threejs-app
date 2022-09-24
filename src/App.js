import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Box from './pages/Box';
import Meshed from './components/Meshed';
import FiberCanvas from './pages/FiberCanvas';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="box" element={<Box />}/>
          <Route path="mesh" element={<Meshed />}/>
          <Route path="fiber" element={<FiberCanvas />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
