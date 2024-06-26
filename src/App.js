import { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  /* ------------- Run the constructor ------------ */
  constructor() {
    // Call super, to inherit
    super();
    // Define states for Monster Rolodex
    // Make the monsters a list instead
    this.state = {
      monsters: []
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

  // fetch the json from a url ASA the component is mounted
  componentDidMount() {
    // this is a promise
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => response.json()
      ).then(
        (users) => this.setState(
          () => {
            return {monsters: users}
          }
        )
      )
  }
  render() {
    return (
      <div className='App'>
        <input className='search-box' 
        type='search' 
        placeholder='search monster' 
        onChange={(event) => {
          console.log(event.target.value);
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });
          this.setState(() => {
            return {monsters: filteredMonsters}
          })
        }}/>
        <CardList monsters={this.state.monsters}/>
        {/* {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>
                {monster.name}
              </h1>
            </div>
            )
          })
        } */}
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