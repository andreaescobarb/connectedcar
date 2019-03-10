import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import icon1 from '../pictures/hondaaccord.jpg'
import icon2 from '../pictures/kia.jpg'
import icon3 from '../pictures/kiario.jpg'
import icon4 from '../pictures/fordfiesta.jpg'
import icon3 from '../pictures/fordfocus.jpg'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { Button } from "reactstrap";

class Mainpage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <div>
                        <Card>
                            <CardImg top width="100%" src = {icon1}  />
                            <CardBody>
                                <CardTitle>Car Model</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src = {icon2}  />
                            <CardBody>
                                <CardTitle>Car Model</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
                <Footer> </Footer>
            </div>
        );
    }
}

export default Mainpage;