import React from 'react';
import {Comida1,  hamburguesaArray} from '../Arrays/Comida';
import {  Container, Table, Row, Col } from 'react-bootstrap';
import justifyContent from 'react-bootstrap';
import {imagen} from '../css/imagen';


class Hamburguesa extends React.Component{
  constructor(props){
    super(props);
  }

  render (){
    return(
      <div className="centrado"> 
          <h1>Comida: {Comida1[2].Nombre}</h1>
          <img style={{width: 300, height: 200}} src={Comida1[2].imagen}/>
          <br/>
          <h1>Ingredientes</h1>
                {
                  hamburguesaArray.map((item) =>{
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
export default Hamburguesa;