import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar.js";
import Footer from "./Footer";
import fire from "../config/Fire";

import { Card, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("success");
      })
      .catch(error => {
        console.log("nada");
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div
          style={{
            border: "thin",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Card style={{ padding: "40px" }}>
            <Form>
              <FormGroup row>
                <Label for="Nombre de Usuario" sm={4}>
                  Correo
                </Label>
                <Col sm={8}>
                  <Input
                    name="email"
                    type="email"
                    id="correo"
                    placeholder="someone@domain.com"
                    value={this.state.email}
                    onChange={this.handleChange}
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
                    autoComplete=""
                    name="password"
                    id="password"
                    placeholder="************"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup check row>
                <Col sm={{ size: 10, offset: 0 }}>
                  <Button size="sm" type="submit" onClick={this.login}>Confirmar</Button>{" "}
                  <Button size="sm">
                    <Link to={"/SingUp.js/"}> Crear Cuenta </Link>
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}
