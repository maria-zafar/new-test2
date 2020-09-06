import logo from './logo.svg';
import classModules from './App.module.css';
import Person from './Person/Person';
import React, { Component } from 'react';


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
  
    this.setState({
      persons:[
        {name: "Mariam", age: 18},
        {name: newName, age: 28},
        {name: "Stephen", age: 10}
  
      ]      
    } )
  }

  nameChangeHandler =( event,id ) => {
  ;
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

 
 let persons = null;
 const btn=[classModules.Button];

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

    btn.push(classModules.Grey);
    
  }

  const classes = [];

  if(this.state.persons.length <= 2){
    classes.push(classModules.blue);
  }

  if(this.state.persons.length <= 1){
    classes.push(classModules.bold);
  }
    return (
      <div className={classModules.App}>
        <div className={classModules.App_Header}>
          <img src={logo} className={classModules.App_logo} alt="logo" />
          <h2>Welcome to React by Maria</h2>
        </div>
        <p className={classes.join(" ")}>Person Number Alert...!!!</p>
        {/* <button 
        style={style}
        onClick={this.toggleHandler}>Toggle Persons</button> */}
        <button 
          className={btn.join(" ")}
          onClick={this.toggleHandler}>Toggle Persons
        
        </button>
        {persons}
       
        
        <div className={classModules.App_footer}>
        <p> This App is being created by Maria and She will be making some really wonderful app using React. </p>
        </div>
      </div>
    );
  }
}

export default App;
