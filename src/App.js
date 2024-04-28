import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  /* ------------- Run the constructor ------------ */
  constructor() {
    // Call super, to inherit
    super();
    // Instantiate the state
    this.state = {
      name : {firstName: "Harsh", lastName: "Munshi "}
    }

  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi {this.state.name.firstName} here!!
          </p>
          <button onClick={() => {
            this.setState({name: {firstName: 'Pragya'}})
          }}>Change Name</button> 
        </header>
      </div>
    );
  }
}


/* ------------------------------------------------------------------------------- */
/* function way of writing the apps, moving to class
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Harsh here!!
        </p>
        <button>
          Change Name
        </button>
      </header>
    </div>
  );
}

export default App;
--------------------------------------------------------------------------- */
export default App;