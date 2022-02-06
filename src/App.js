import React from 'react';
import './style.css';

//Importar componentes
import Header from './components/Header';
import React from 'react';
import {header} from './Arrays/header';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Header />
      {header.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
