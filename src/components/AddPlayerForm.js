import React, {Component} from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({value: e.target.value});

  }

  handleSubmit = (e) => {
    e.preventDefault(); //If you don't prevent the form's default behaviour, it will again reload from scratch which means we would loose all the application's data
    this.props.addPlayer(this.state.value);
    this.setState({ value: ''});
  }


  render () {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
      <input
       type="text"
       value = {this.state.value}
       onChange = {this.handleValueChange}
       placeholder="Enter a player's name"
      />

      <input
       type="submit"
       value="Add player"
      />
      </form>


    );
  }
}

export default AddPlayerForm;
