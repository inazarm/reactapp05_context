import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';
import Parent from './Parent';

function App() {
  let increaseNo=useState(40);
  return (
    <ValueContext.Provider value={increaseNo}>
      <div>
        Hello World!
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
