import logo from '../../logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Providers from '../Providers/Providers';
import Glossary from '../Glossary/Glossary';

const API_BASE_URL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/pap-smear-workflow/" element={<Banner />} />
          <Route path="/pap-smear-workflow/faq" element={<Home />} />
          <Route path="/pap-smear-workflow/providers" element={<Providers />} />
          <Route path = "/pap-smear-workflow/glossary" element= {<Glossary/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;