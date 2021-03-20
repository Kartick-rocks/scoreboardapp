import React, {Component} from 'react';

class AddPlayerForm extends Component {


  playerInput = React.createRef();



  handleSubmit = (e) => {
    e.preventDefault(); //If you don't prevent the form's default behaviour, it will again reload from scratch which means we would loose all the application's data
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();

  }


  render () {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
      <input
       type="text"
       ref={this.playerInput}
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
