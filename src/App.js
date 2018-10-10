import React, { Component } from 'react';
import './App.css';
import Forms from './Components/Forms';
import Receipes from './Components/Receipes';
import Router from './Components/Router';


  const API_KEY="ee7e7f756308e121b9d52ad9340a2d96";

class App extends Component {

  state={
    receipe:[]
  }


  getReceipe = async (e) =>{
    e.preventDefault();
      const receipeName=e.target.elements.search.value;
    const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${receipeName}&count=100`);
    const data =await api_call.json();
    this.setState({
      receipe:data.recipes
    });
    console.log(this.state.receipe);
  }

  componentDidUpdate = () =>{
    const recipes = JSON.stringify(this.state.receipe);
    localStorage.setItem("recipes",recipes);
  }
  componentDidMount= ()=>{
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      receipe:recipes
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Food Receipe</h1>
        </header>
        <Forms getReceipe={this.getReceipe} />
        <Receipes recipes={this.state.receipe} />



      </div>
    );
  }
}

export default App;
