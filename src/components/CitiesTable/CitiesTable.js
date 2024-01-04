import React, { useState, useEffect } from 'react';
import './CitiesTable.css'

const CitiesTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/cities/getAllCity');
            const citiesData = await response.json();
            setData(citiesData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
      <table className='table'> 
        <thead>
          <tr>
            <th>City</th>
            <th>District</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.cityName}</td>
              <td>{row.districtName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesTable;
