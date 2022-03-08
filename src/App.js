import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Accueil from './components/Accueil';
import Navibar from "./components/Navbar";
import Restaurant from './components/Restaurant';
import Carte from './components/Carte';
import FooterRS from "./components/Footer";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/carte" element={<Carte />}></Route>
        </Routes>
        <FooterRS />
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
