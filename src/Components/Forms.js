import React, { Component } from 'react';

class Forms extends Component{
  render(){
    return(
      <div>
      <form onSubmit={this.props.getReceipe} style={{marginBottom:"4rem"}}>
      <input className="form__input" type="text" name="search" placeholder="food" />
      <button className="form__button" >submit</button>
      </form>
      </div>
    )
  }
}
export default Forms;
