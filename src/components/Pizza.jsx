import React from 'react';
import {Comida,PizzaArray,Comida1} from '../Arrays/Comida';
import { Container, Table, Row, Col } from 'react-bootstrap';
import {DataUser} from '../Arrays/DataUser';

class Pizza extends React.Component{

  constructor(props){
    super(props)
  };

  render (){
    if(localStorage.getItem('user')== DataUser[0].name && localStorage.getItem('Contraseña')==DataUser[0].password){
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
    }else{
      return(
        <div className='centrado'>
          <h1>Se han introducido mal los datos del usuario</h1>
        </div> 
      );
    }
    
  }
}
export default Pizza;