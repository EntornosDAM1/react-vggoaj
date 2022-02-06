import React from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';


class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.inputUser=React.createRef();
    this.inputPass=React.createRef();  
  }

  login() {
    this.setState({ user:this.inputUser.current.value , password: this.inputPass.current.value });
    localStorage.setItem('user',this.inputUser.current.value);
    localStorage.setItem('Contraseña',this.inputPass.current.value);
    this.getName();
    this.getPassword();
  }

  getName(){
    return this.inputUser.current.value;
  }

  getPassword(){
    let namePass=this.inputPass.current.value;
    return namePass;
  }

  render (){
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="centrado">
          <br/>
          <h1>Bienvenido a mi pizzeria, {this.state.user}.</h1>
        </div>
      );
    } else {
      return (
        <div className="centrado">
          <h1>Bienvenido! {}</h1>
          <br/>
          <Container >
            <Form>
              <Form.Group  controlId="formBasicEmail">
                <Form.Label>Nombre de usuario o email:</Form.Label>
                <Form.Control  type="email"  ref={this.inputUser} />
              </Form.Group>
              <br/>
              <Form.Group  controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text"   ref={this.inputPass} />
              <br/>
              </Form.Group>
              <br/>
              <Button variant="primary" type="submit" onClick={this.login}>
                Enviar
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
     
  }
}
export default Home;