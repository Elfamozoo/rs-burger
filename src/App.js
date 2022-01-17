import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Accueil from './components/Accueil';
import Navibar from "./components/Navbar";
import Restaurant from './components/Restaurant';
import Carte from './components/Carte';





const App = () => {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/carte" element={<Carte />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
