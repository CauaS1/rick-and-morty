import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import './index.css';

export default function Location() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function getLocation() {
      const response = await api.get("https://rickandmortyapi.com/api/location");
      setLocation(response.data);
    }

    getLocation();
  }, [])

  console.log(location);

  return (
    <>
      <Header />
      <div className="location-container">
        <div className="planets-list">

          {location.results && (
            location.results.map(location => {
              return (
                <div className="about-location" key={location.id}>
                  <a href={`location/${location.id}`}>{location.name}</a>

                  <p>Type - {location.type}</p>
                  <p>Dimension - {location.dimension}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  )
}