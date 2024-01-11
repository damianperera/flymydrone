import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <div id="map" className="DroneMap">
          <iframe className="ResponsiveIframe" src="https://dronemaps24.org/?lang=en" title="Drone Map" allow="geolocation 'src';"></iframe>
        </div>
    </div>
  );
}

export default App;
