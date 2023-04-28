import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Explainer from './pages/Explainer'
import Translator from './pages/Translator'
import Navbar from './components/Navbar'
import Complexity from './pages/Complexity'
import Footer from './components/Footer'





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/complexity" element={<Complexity/>}/>
          <Route path="/explainer" element={<Explainer/>}/>
          <Route path="/translator" element={<Translator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
