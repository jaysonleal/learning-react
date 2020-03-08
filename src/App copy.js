import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Profile from './components/Profile';
import { httpClient } from './helpers';
import Todo from './components/Todo';
class App extends Component {

  state = {
    name: "Jayson",
    age: 0,
    todos: []
  }

  static defaultProps = {
    animal: "hen"
  }

  logData = () => {
    console.log("Logging Data: !")
  }

  handleTextChange = (evt) => {
    evt.persist();
    this.setState({
      [evt.target.name]: evt.target.value      
    }, () => {
      console.log(evt);
    });
  }

  showPage = () => {
    
    const { name, age } = this.state;

    return (
      <div className="App">
      <Hello name={name} />
      <Profile />
      <p>My name is {name}</p>
      <p>My age is {age}</p>
      <input type="text"
             name="name"
             value={name}
             placeholder="Enter your name" 
             onChange={this.handleTextChange}/>
  <br/>
      <input type="text"
             name="age"
             value={age}
             placeholder="Enter your age"
             onChange={this.handleTextChange}
      />
      </div> 
    )
  }

  showNotFound = () => {
    const { name } = this.state;
  return <div><h1>User not found {name }</h1></div>
  }

  componentDidMount() {
    httpClient({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "get"
    }).then(response => {
      this.setState({
        todos : response.data
      })
      console.log(response.data);
    });
  }
  
  render() {

    const { name, todos } = this.state;
    
    // return name === 'Jayson' ? this.showPage() : this.showNotFound();

    return (
      
      <ul>
        {
          todos.map((todo, index) => {
            return <Todo todo={todo} key={index}/>
          })
        }        
      </ul>
    )
  };
}

export default App;
