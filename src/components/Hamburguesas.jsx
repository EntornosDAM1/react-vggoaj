import React from 'react';
import {Comida1, hamburguesa} from '../Arrays/Comida';
import {  Container, Table, Row, Col } from 'react-bootstrap';


class Hamburguesa extends React.Component{
  render (){
    return(
      <div> 
          <h1>Comida: {Comida1[2].Nombre}</h1>
          <br/>
          <h2>Ingredientes</h2>
          <br/>
          <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Ingrediente</th>
                    <th>Ingrediente</th>
                    <th>Ingrediente</th>
                  </tr>
                </thead>
                <tbody>
                {
            hamburguesa.map((item) =>{
               return (
                 <td>
                   <tr>
                    {item.Ingrediente}
                  </tr>
                </td>
               );       
            }
            )
          }
                    
                </tbody>
              </Table>
            </Col>
          </Row>  
          </Container>
            
      </div> 
    );
      
  }
}
export default Hamburguesa;