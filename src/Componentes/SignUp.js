import React from "react";
import {
Card,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import NavBar from './Navbar.js';
export default class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
            <br></br><br></br>
        <div style ={{border: 'thin', display: 'flex', justifyContent: 'center'}}>
          <Card style={{padding: '40px'}}>
          <Form>
            <FormGroup row>
              <Label for="Nombre" sm={4}>
                Nombre
              </Label>
              <Col sm={8}>
                <Input
                  type="nombre"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Apellido" sm={4}>
                Apellido
              </Label>
              <Col sm={8}>
                <Input
                  type="apellido"
                  name="apellido"
                  id="apellido"
                  placeholder="Ingrese su Apellido"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Nombre de Usuario" sm={4}>
                Nombre de Usuario
              </Label>
              <Col sm={8}>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Ingrese su Nombre de Usuario"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Correo" sm={4}>
                Correo
              </Label>
              <Col sm={8}>
                <Input
                  type="correo"
                  name="correo"
                  id="correo"
                  placeholder="Ingrese su Correo"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={4}>
                Contraseña
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="confirm password" sm={4}>
                Confirmar Contraseña
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="************"
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 0 }}>
                <Button>Confirmar</Button>
              </Col>
            </FormGroup>
          </Form>
          </Card>
        </div>
      </div>
    );
  }
}


