import React, { Component, } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Container, } from "semantic-ui-react";
import axios from "axios";


class App extends Component {
  state = { foods: [], };

  componentDidMount() {
    axios.get("/api/foods")
      .then( res => {
        this.setState({ foods: res.data, })
      })
      .catch( err => {
        console.log(err);
      })
    
  }

  addMenu = (name) => {
    axios.post('/api/Menu', { name })
      .then( res => {
        const { Menus, } = this.state;
        this.setState({ foods: [...foods, res.data], });
      })
  }
  

  updatefoods = (id) => {
    axios.put(`/api/Menus/${id}`)
      .then( res => {
        const foods = this.state.foods.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ foods, });
    })
  }

  deletefoods = (id) => {
    axios.delete(`/api/Menus/${id}`)
      .then( res => {
        const { foods, } = this.state;
        this.setState({ foods: foods.filter(t => t.id !== id), })
      })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
      <h1>Test</h1>
      <FoodForm addMenu={this.addMenu} />
      <br />
      <br />
       <FoodList
       foods={this.state.foods}
        updateFood={this.updateFood}
         deleteFood={this.deleteFood }
         />
      </Container>
    );
  }
}







export default App;
