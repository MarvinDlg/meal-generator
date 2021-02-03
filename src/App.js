import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Reload from "./components/Reload";
import FetchNewMeal from "./components/FetchNewMeal";


class App extends React.Component {

  render() {
    return (

      <main className="App">
        <Header />
        <Reload />
        <FetchNewMeal />
      </main>
    );    
    
  }
}

export default App;
