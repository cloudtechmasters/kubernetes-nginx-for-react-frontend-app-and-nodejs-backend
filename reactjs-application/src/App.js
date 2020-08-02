import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [countryData, setCountryData] = useState([]);

const [districData, setDistrictData] = useState([]);

useEffect(() => {
  // const apiUrl = `http://localhost:8080`;
  // fetch(apiUrl)
  //   .then((res) => res.json())
  //   .then((repos) => {
  //     setCountryData(repos);
  //   });
}, []);


const getCountryData = async () => {

  const result =  await axios(
    'https://node-app.vamsiawstraining.com/api1',
  );
  setCountryData(result.data);  
}

const getDistrictData = async () => {

  const result =  await axios(
    'https://node-app.vamsiawstraining.com/api2',
  );
  setDistrictData(result.data);  
}
  return (
    <div className="App">
      <div className="header-bar">REACT - NODE - NGINX REVERSE PROXY WITH MULTIPLE CONTAINERS</div>
      <header className="App-header">
      <div className="data-container">
      <div style={{borderRight: "2px solid"}}>
        <h4>Node JS - APP 1</h4>
      <button className="btn-dgn" style={{background: "#306c9e"}}onClick={getCountryData}> Get Country </button>
      <ul>
        {countryData.map((item,index) =>
        <li key={index}>{item.country}- {item.state}</li>
        )}
      </ul>
      </div>
      <div>
      <h4>Node JS - APP 2</h4>
      <button className="btn-dgn" onClick={getDistrictData}> Get District </button>
      <ul>
        {districData.map((item,index) =>
        <li key={index}>{item.state}- {item.district}</li>
        )}
      </ul>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
