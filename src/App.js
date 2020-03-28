import React from 'react';
import { Hangman } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>React Hangman</h1>
        <Hangman incorrectGuessCount={10}></Hangman>
      </div>
    </div>
  );
};

export default App;
