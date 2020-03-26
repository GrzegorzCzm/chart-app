import React from 'react';
import './App.css';
import Charts from './components/Charts';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Charts />
        <Alert />
      </header>
    </div>
  );
}

export default App;
