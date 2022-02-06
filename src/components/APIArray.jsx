import React from 'react';
import {Container,Row,Col,table} from 'react-bootstrap';

class APIArray extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      selectedItem: null,
      tableData:[]
    };
  }

  eventoclick(item) {
    this.setState({
      name: item.name,
      latinname: item.latin_name,
    });
  }  
  async componentDidMount(){
    const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9');
    const responseData = await response.json();
    this.setState({
      tableData : responseData,
      selectedItem:responseData[0]
    });
  }

  render(){
    return(
      <div>
        <h1>Intento de API ARRAY</h1><br/>
        <Container>
          <Row>
            <Col>
            <table>
                <tr>
                  <td>Algo</td>
                  <td>Algo2</td>
                  <td>Algo3</td>
                </tr>
                <td>
                    {this.state.tableData.map((item)=>{
                        return (
                          <tr onClick={() => this.eventoclick(item)}>
                          <td>{item.name}</td>
                          <br/>
                          aaaaaaa
                                                
                        </tr>
                        );
                    })}
                </td>
             </table> 
            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}
export default APIArray;