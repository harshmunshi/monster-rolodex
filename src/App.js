import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  /* ------------- Run the constructor ------------ */
  constructor() {
    // Call super, to inherit
    super();
    // Define states for Monster Rolodex
    this.state = {
      monster1: {
        name: 'Linda'
      },
      monster2: {
        name: 'Sato'
      },
      monster3: {
        name: 'Kato'
      }
    }

  }
  render() {
    return (
      <div className='App'>
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>

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