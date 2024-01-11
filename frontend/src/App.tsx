import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import DroneMap from './components/DroneMap';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <DroneMap />
    </div>
  );
}

export default App;
