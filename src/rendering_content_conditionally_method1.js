
import React, { Component } from 'react';;
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'



class App extends Component {
  state= {
    persons:[
      {name: "Maria", age: 18},
      {name: "Max", age: 28},
      {name: "Stephenie", age: 10}

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

  nameChangeHandler =(event) => {
    // console.log("clicked");
    this.setState({
      persons:[
        {name: "Mariam", age: 18},
        {name: event.target.value, age: 28},
        {name: "Stephen", age: 10}
  
      ]
    } )
  }

  toggleHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  render() {

    const style={
      backgroundColor: "white",
      border: "1px  solid blue",
      font: "inherit",
      padding: "8px",
      margin:"4px auto",
      cursor: "pointer"
  };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React by Maria</h2>
        </div>
        <button 
        style={style}
        // onClick={this.onclickHandler.bind(this,"Maxi")}>Switch</button>
        //{/* <button onClick={() => {this.onclickHandler("Maxi")}}>Switch</button> */}
        onClick={this.toggleHandler}>Toggle Name</button>
        { 
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                >Computer Scientist</Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.onclickHandler.bind(this,"Ali")}
                changed={this.nameChangeHandler}/>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> :null
        }
       
        
        <div className="App-footer">
        <p> This App is being created by Maria and She will be making some really wonderful app using React. </p>
        </div>
      </div>
    );
  }
}

export default App;
