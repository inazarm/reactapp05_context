import React from 'react';
import './App.css';
import ValueContext from './ValueContext';
import Parent from './Parent';

function App() {
  return (
    <ValueContext.Provider value={70}>
      <div>
        Hello World!
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
