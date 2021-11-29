import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      FoodList: [],
      userFood: ''
    };
  }

  handleChange = (evt) => {
  this.setState({ userFood: evt.target.value });
console.log(this.state.userFood)
  };

  handleSubmit = (evt) => {

  }
  
  render() {
     return (
    <form className="food-adder">
      <input onChange={this.handleChange} type="text" placeholder="Добавьте продукты" />
      <button onSubmit={this.handleSubmit} className="food-adder__submit"></button>
    </form>
  );
  }
}

export default FoodAdder;
