import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import './index.css';

export default function SpecificLocation(props) {
  const [location, setLocation] = useState();
  const [residents, setResidents] = useState([]);
  const [res, setRes] = useState([]);

  // const [id, setId] = useState(props.match.params.id);
  const id = props.match.params.id;
  useEffect(() => {
    async function getLocation() {
      const response = await api.get(`https://rickandmortyapi.com/api/location/${id}`);
      setLocation(response.data);
    }
    getLocation();

    // async function getResidents() {
    //   location.residents && (
    //     location.residents.map(resident => {
    //       const response = api.get(resident);
    //       setResidents(response.data);
    //     })
    //   )
    // }
    // getResidents();

  }, []);

console.log(residents)

  return (
    <>
      <Header />
      <div className="specific-location-container">
        {location && (
          <div className="location">
            <h1>{location.name}</h1>
            <p>Type:{location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <h2>Residents</h2>
          </div>
        )}
      </div>
    </>
  );
}