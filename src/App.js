import React from 'react';
import './style.css';
//Importar componentes
import ArchivoJugar from './components/ArchivoJugar';
import Header from './components/Header';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import header from './Arrays/header';


export default function App() {
  return (
    <Router>
    <Header/>
    <ArchivoJugar/>
  </Router>
  );
}
