import React, { Component } from "react";
import Navbar from "./Navbar";
import Carouse from "./Carousel";
import Footer from "./Footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carouse />
        <Footer> </Footer>
      </div>
    );
  }
}

export default Homepage;
