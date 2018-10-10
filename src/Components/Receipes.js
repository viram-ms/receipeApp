import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Receipes extends Component{
  render(){
    return(
      <div>
        {console.log(this.props.recipes)}


        <div className="container">
        <div className="row">
        {
          this.props.recipes.map((recipe)=>{
          return (
            <div className="col-md-4" key={recipe.recipe_id} style={{marginBottom:"2rem"}}>
            <div className="recipes__box">
              <img className="recipe__box-img"
              src={recipe.image_url}
              alt={recipe.title} />
              <div className="recipe__text">
                <h5 className="recipes__title">
                {recipe.title.length<20 ?  `${recipe.title}`: `${recipe.title.substring(0,25)}...`}
                </h5>
                <p className="recipes__subtitle">Publisher:
                <span>
                {
                  recipe.publisher
                }</span></p>
                <button className="recipe_buttons">
              <Link to={{ pathname: `/recipe/${recipe.recipe_id}`,
                          state:{recipe:recipe.title}
                        }}>  View Receipe</Link>
                </button>
              </div>
            </div>
            </div>


          )
        })
        }
        </div>


        </div>
        </div>

    );
  }
}
export default Receipes;
