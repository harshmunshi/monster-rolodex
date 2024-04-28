import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  /* ------------- Run the constructor ------------ */
  constructor() {
    // Call super, to inherit
    super();
    // Define states for Monster Rolodex
    // Make the monsters a list instead
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 0
        },
        {
          name: 'Sato',
          id: 1
        },
        {
          name: 'Kato',
          id: 2
        }
      ]
    }

    /* ----------------------------------------------- */
    // The method below is inefficient since we need to
    // run the <h1> tag multiple times
    // this.state = {
    //   monster1: {
    //     name: 'Linda'
    //   },
    //   monster2: {
    //     name: 'Sato'
    //   },
    //   monster3: {
    //     name: 'Kato'
    //   }
    // }

  }
  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>
                {monster.name}
              </h1>
            </div>
            )
          })
        }
        {/* ----------- Ineffcient -------------- */}
        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}

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