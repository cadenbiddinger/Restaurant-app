import React, { Component, } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
    
  }

  addMenu = (name) => {
    axios.post('/api/Menu', { name })
      .then( res => {
        const { Menus, } = this.state;
        this.setState({ menus: [...menus, res.data], });
      })
  }
  

  updateMenu = (id) => {
    axios.put(`/api/Menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ menus, });
    })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/Menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter(t => t.id !== id), })
      })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <h1>Test</h1>
        //<MenuForm addMenu={this.addMenu} />
        <br />
      </Container>
    );
  }
}






export default App;
