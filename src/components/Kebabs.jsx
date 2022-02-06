import React from 'react';
import  {kebabArray,Comida1} from '../Arrays/Comida';
import { Container, Table, Row, Col } from 'react-bootstrap';
import '../css/divCentrado';

class Pizza extends React.Component{

  constructor(props){
    super(props)
  };

  render (){
    return(
      <div className="centrado"> 
          <h1>Comida: {Comida1[1].Nombre}</h1>
          <img style={{width: 300, height: 200}} src={Comida1[1].imagen}/>
          <br/>
          <h1>Ingredientes</h1>
                {
                  kebabArray.map((item) =>{
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