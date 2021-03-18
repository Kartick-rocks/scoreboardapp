import React, {Component} from 'react'; //known as named import
//import ReactDOM from 'react-dom';
import Header from './Header';
import Player from './Player';

/*const title = React.createElement(
  'h1',
  {id: 'main-title', title: 'This is a title.'},
  'My First React Element'
);*/

/*const players = [
  {
   name: "Kartick",
   score: 100,
   id: 1
 },
  {
   name: "Guil",
   score: 50,
   id: 2
 },
 {
   name: "Treasure",
   score: 85,
   id: 3
 },
 {
   name: "Ashley",
   score: 95,
   id: 4
 },
 {
   name: "James",
   score: 80,
   id: 5
 }

];*/




//console.log(title); //title is not exactly a DOM element.  It is an object representation of a DOM node.

//This is what this title object creates as shown below
//<h1 id="main-title" title ="This is a title.">My First React Element </h1>

/*const desc = React.createElement(
  'p',
  null,  //Create Element considers any argument after the second argument as its children
  'I just learned how to create a React node and render it to the DOM' //We can have any number of children
);*/

/*const header = React.createElement(
  'header',
   null,
   title,
   desc
);*/

//Using this Curly braces is this JSX syntax
/*const header = (
   <header>
    <h1 id={ myTitleID }> { name }'s First React Element!</h1>
  <p className = "main-desc"> { desc } </p>
  </header>
);*/






class App extends Component {

  state = {
    players: [
      {
       name: "Kartick",
       score: 0,
       id: 1
     },
      {
       name: "Guil",
       score: 0,
       id: 2
     },
     {
       name: "Treasure",
       score: 0,
       id: 3
     },
     {
       name: "Ashley",
       score: 0,
       id: 4
     },
     {
       name: "James",
       score: 0,
       id: 5
     }


    ]

  };

  handleScoreChange(index, delta) {
    this.setState(prevState => {
      score: prevState.players[index].score += delta;
    });
   }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      };

    });
  }

  render() {
    return (
      <div className = "scoreboard">
      <Header title="My Scoreboard" totalPlayers={this.state.players.length}/>


      {this.state.players.map( (player, index) =>
        <Player
        name={player.name}
        score={player.score}
        id = {player.id}
        key = {player.id.toString()}
        index = {index}
        changeScore = {this.handleScoreChange}
        removePlayer = {this.handleRemovePlayer}
        />


      )}


      </div>
    );


}
}

/*This is where the concept of independent self-contained and reusuable components begins to manifest itself
Components facilitate what is known as seperation of concerns
This means each component in your UI must be responsible for doing one thing only, it should
not contain any other responsibilities
This also reduces code complexity and increases maintainability*/

//Components present inside another component is known as composition
//Composing components is a core concept in React
//The parent component is present inside the child component and in this way the parent component
//can control the functionality of the child component

//A parent component can have many child components

/*ReactDOM.render(
  <Header />,
  document.getElementById('root')
);*/

//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//);

//Remember a <span> tag is used to hook up a part of a text or a document
//Components should be as small as possible and not have too many responsibilities.
//That way it is easier to understand their behaviour
//Hence we can make our player component even smaller by extracting the counter code from the player component into its own COMPONENT

export default App;

/*ReactDOM.render(
  header,
  document.getElementById('root')
);*/


/*ReactDOM.render(
  title,
  document.getElementById('root')
); */ //This function is what does the creating and updating of the DOM. It is this
                  //function that connects react to the DOM.

//React never touches the DOM directly. It just manages what gets updated and rendered via the DOM
