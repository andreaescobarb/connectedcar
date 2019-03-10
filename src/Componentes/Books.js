import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class Books extends React.Component {
  render() {
    return (
      <div style={{display: "flex", justifyContent:"center"}}>
        <Card style={{padding: "40px"}}>
          <Form>
            <FormGroup row>
              <Label for="Pick-up Location" sm={4}>
                Pick-up Location
              </Label>
              <Col sm={8}>
                <Input
                  type="select"
                  name="select"
                  id="selec"
                  placeholder="select"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Pick-up Date" sm={4}>
                DD-MM-YY
              </Label>
              <Col sm={8}>
                <Input type="date" name="date" id="date" placeholder="date" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Pick-up Time" sm={4}>
                Time
              </Label>
              <Col>
                <Input type="time" name="time" id="time" placeholder="time" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Drop-off Date" sm={4}>
                DD-MM-YY
              </Label>
              <Col sm={8}>
                <Input type="date" name="date" id="date" placeholder="date" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Drop-off Time" sm={4}>
                Time
              </Label>
              <Col>
                <Input type="time" name="time" id="time" placeholder="time" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="Vehicle type" sm={4}>
                Vehicle type
              </Label>
              <Col sm={8}>
                <Input
                  type="select"
                  name="select"
                  id="selec"
                  placeholder="select"
                />
              </Col>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}
