import React, { useState } from 'react';
import './CityForm.css'


function CityForm() {
    const [cityName, setCityName] = useState('');
    const [districtName, setDistrictName] = useState('');

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrictName(e.target.value);
  };

  const saveCity = () => {
    try {
        const response = fetch('http://localhost:8080/cities/createcity', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              cityName,
              districtName,
          }),
        });
  
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Failed to send data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCity();
    setCityName("");
    setDistrictName("");
  }
    
  const handleGetStarted = () => {
    window.location.href = '/citytable';
};

  return (
    <div>
      <h2>City Information</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label>City:</label>
        <input type="text" value={cityName} onChange={handleCityChange} />
      </div>
      <div>
        <label>District:</label>
        <input type="text" value={districtName} onChange={handleDistrictChange} />
      </div>
      <button type="submit">Add</button>
      </form>
      <button onClick={handleGetStarted}>Get All Cities</button>
    </div>
  );
};

export default CityForm;