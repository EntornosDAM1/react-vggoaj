import React from 'react';
import {Pizza,Comida1} from '../Arrays/Comida';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';


class ArchivoJugar extends React.Component{
  render (){
    return(
      <div> 
          Comida: {Comida1.Nombre}
          <br/>
          Ingredientes:
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
            Pizza.map((item) =>{
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
export default ArchivoJugar;