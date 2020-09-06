import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'black' : 'green'};
  color: white;
  border: ${props => props.alt ? '1px grey' : '1px solid green'};
  font: inherit;
  padding: 8px;
  margin: 4px auto;
  cursor: pointer;      

  &:hover{ 
    background-color: ${props => props.alt ? 'grey' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons:[
      {id: "per1", name: "Maria", age: 18},
      {id: "per2", name: "Max", age: 28},
      {id: "per3", name: "Stephenie", age: 10}

    ],
    showPersons: false
  };
  onclickHandler =(newName) => {
    // console.log("clicked");
    this.setState({
      persons:[
        {name: "Mariam", age: 18},
        {name: newName, age: 28},
        {name: "Stephen", age: 10}
  
      ]      
    } )
  }

  nameChangeHandler =( event,id ) => {
    // console.log("clicked");
    const personIndex = this.state.persons.findIndex(p => {return p.id === id});

    const person = {...this.state.persons[personIndex]}
    
    //or alternatively, const person= Object.assign({},this.state.persons[personIndex]);

    person.name= event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex]=person;

    this.setState({
      persons:persons
    } )
  }

  toggleHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons});
  }

  render() {

  //   const style={
  //     backgroundColor: "green",
  //     color: "white",
  //     border: "1px  solid green",
  //     font: "inherit",
  //     padding: "8px",
  //     margin:"4px auto",
  //     cursor: "pointer"
  // };

  let persons = null;

  if (this.state.showPersons){
    persons = (
      <div>
          {this.state.persons.map( (person, index)=>{
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}
            />
          })}          
    </div> 

    );

    // style.backgroundColor= "black";
    // style.border= "grey";
  }

  let classes =[];

  if(this.state.persons.length <= 2){
    classes.push("blue");
  }

  if(this.state.persons.length <= 1){
    classes.push("bold");
  }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React by Maria</h2>
        </div>
        <p className={classes.join(" ")}>Person Number Alert...!!!</p>
        {/* <button 
        style={style}
        onClick={this.toggleHandler}>Toggle Persons</button> */}
        <StyledButton 
          alt={this.state.showPersons}
          onClick={this.toggleHandler}>Toggle Persons
        
        </StyledButton>
        {persons}
       
        
        <div className="App-footer">
        <p> This App is being created by Maria and She will be making some really wonderful app using React. </p>
        </div>
      </div>
    );
  }
}

export default App;
