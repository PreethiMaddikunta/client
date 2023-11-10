import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import MapView from './MapView';

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [shortestPath, setShortestPath] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/cities') // Update with your server URL
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Shortest Path Finder</h1>
      <CitySelector
        cities={cities}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
      />
      <button onClick={calculateShortestPath}>Calculate Shortest Path</button>
      <MapView
        cities={cities}
        selectedCities={selectedCities}
        shortestPath={shortestPath}
      />
    </div>
  );

  function calculateShortestPath() {
    axios
      .post('http://localhost:5000/api/shortest-path', {
        selectedCities: selectedCities,
      }) // Update with your server URL
      .then((response) => {
        setShortestPath(response.data);
      })
      .catch((error) => {
        console.error('Error calculating the shortest path:', error);
      });
  }
}

export default App;
