import React, { Component } from 'react';
import {Link } from 'react-router-dom';
const API_KEY="364c7e7bf9275b38283c214713626f14";

class Recipe extends Component{
  state={
    activeRecipe:[]
  }

  componentDidMount = async () => {
      const title = this.props.location.state.recipe;
    const req= await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res=await req.json();

    console.log(res.recipes[0]);
    this.setState({
      activeRecipe:res.recipes[0]
    });
  }
  render(){
    console.log(this.props);
    const data=this.state.activeRecipe;

    return(

        <div className="container">
      {
        this.state.activeRecipe.length!==0 &&
        <div className="active-recipe">
        <img className="acitve-recipe__img" src={data.image_url} />
        <h3 className="active-recipe__title">
          {data.title}
        </h3>
        <h4 className="active-recipe__publisher">Publisher: <span>{data.publisher}</span></h4>
        <p className="active-recipe__publisher">Website: <span> <a href={data.publisher_url}> {data.publisher_url} </a></span></p>
        <button className="active-recipe__button" >
      <Link to="/">  Go Home</Link>
        </button>
        </div>
      }

        </div>

    )
  }
}

export default Recipe;
