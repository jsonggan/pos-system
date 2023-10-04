import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLanguage from './pages/selectLanguage';

/** 
 * @param {Object} props
 * @property {string} props.name - The name of the person as a string.
 * 
 */
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectLanguage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
