import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Donno from './pages/Donno'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Donno" element={<Donno/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
