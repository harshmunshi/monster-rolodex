import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/matchers';


class App extends Component{
  /* ------------- Run the constructor ------------ */
  constructor() {
    // Call super, to inherit
    super();
    // Instantiate the state
    this.state = {
      name : "Harsh"
    }

  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi {this.state.name} here!!
          </p>
          <button>
            Change Name
          </button> 
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