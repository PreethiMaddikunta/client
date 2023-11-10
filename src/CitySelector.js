import React from 'react';

function CitySelector({ cities, selectedCities, setSelectedCities }) {
  const handleCitySelection = (event) => {
    const cityName = event.target.value;
    const city = cities.find((c) => c.name === cityName);
    if (city && !selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
  }

  return (
    <div>
      <h2>Select Cities:</h2>
      <select onChange={handleCitySelection}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <div>
        <h3>Selected Cities:</h3>
        <ul>
          {selectedCities.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CitySelector;
