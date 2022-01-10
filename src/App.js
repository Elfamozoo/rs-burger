import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Accueil from './components/Accueil';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
