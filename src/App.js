import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLanguage from './pages/selectLanguage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectLanguage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
