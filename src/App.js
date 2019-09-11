import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Drink from './Drink'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Drink food="frango" />
      </header>
    </div>
  );
}

export default App;
