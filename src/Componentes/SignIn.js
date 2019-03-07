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
import NavBar from "./Navbar.js";
export default class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div
          style={{ border: "thin", display: "flex", justifyContent: "center" }}
        >
          <Card style={{ padding: "40px" }}>
            <Form>
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
