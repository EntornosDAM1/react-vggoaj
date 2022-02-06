import React from 'react';
import React from 'react';
import {Comida1, kebab} from '../Arrays/Comida';
import {  Container, Table, Row, Col } from 'react-bootstrap';


class Kebabs extends React.Component{
  render (){
    return(
      <div> 
          <h1>Comida: {Comida1[1].Nombre}</h1>
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
            kebab.map((item) =>{
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
export default Kebabs;