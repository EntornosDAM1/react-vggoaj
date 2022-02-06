import React from 'react';
import './style.css';
//Importar componentes
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import header from './Arrays/header';


export default function App() {
  return (
    <Router>
    <Header/>
    <Home/>
  </Router>
  );
}
