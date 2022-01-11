import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Accueil from './components/Accueil';
import Navibar from "./components/Navbar";




const App = () => {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
