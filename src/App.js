import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Content from "./Componentes/Content";
import fire from "./config/Fire";
import Login from "./Componentes/SignIn";
import "firebase/auth";

class App extends Component {
  static propTypes = {
    body: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        {this.state.user ? <Content body={children} /> : <Login />}
        {/*<Content body={children} />*/}
      </div>
    );
  }
}

export default App;
