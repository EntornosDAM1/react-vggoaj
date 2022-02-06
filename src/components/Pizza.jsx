import React from 'react';
import {Comida,PizzaArray,Comida1} from '../Arrays/Comida';
import { Container, Table, Row, Col } from 'react-bootstrap';


class Pizza extends React.Component{

  constructor(props){
    super(props)
  };

  render (){
    return(
      <div className="centrado"> 
          <h1>Comida: {Comida1[0].Nombre}</h1>
          <img style={{width: 300, height: 200}} src={Comida1[0].imagen}/>
          <br/>
          <h1>Ingredientes</h1>
                {
                  PizzaArray.map((item) =>{
                    return (
                          <h2 className="colorIngredientes">{item.Ingrediente}</h2>
                    );       
                  }
                  )
                }
                    
              
        
      </div> 
    );      
  }
}
export default Pizza;