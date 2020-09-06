import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


const App = (props) => {
  const [stateArr, updateState] = useState({
    persons:[
        {name: "Maria", age: 18},
        {name: "Max", age: 28},
        {name: "Stephenie", age: 10}
      
     ]
    });
  
    const [otherstateArr, updateotherState] = useState({otherstate:"some other state" });
  const onclickHandler = () => {
  //     // console.log("clicked");
    updateState({
        persons:[
          {name: "Mariam", age: 18},
          {name: "Maxi", age: 28},
          {name: "Stephen", age: 10}
    
        ]
      } )
    }
  return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React by Maria</h2>
        </div>
        <button onClick={onclickHandler}>Switch</button>
        <Person name={stateArr.persons[0].name} age={stateArr.persons[0].age} >Computer Scientist</Person>
        <Person name={stateArr.persons[1].name} age={stateArr.persons[1].age} />
        <Person name={stateArr.persons[2].name} age={stateArr.persons[2].age} />
                
        <div className="App-footer">
          <p> This App is being created by Maria and She will be making some really wonderful app using React. </p>
        </div>
      </div>

  )
};

export default App;