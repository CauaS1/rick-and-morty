import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';
import './index.css';

export default function Main() {
  const [character, setCharacter] = useState([]);
  const [statusColor, setStatusColor] = useState('#000');

  useEffect(() => {
    async function getCharacter() {
      const resposne = await api.get("https://rickandmortyapi.com/api/character");
      setCharacter(resposne.data);
    }

    getCharacter();
  }, [])

  console.log(character.results);

  return (
    <>
      <Header />
      <div className="main-container">

        <div className="list-container">
          {character.results && (character.results.map(info => {
            return (
              <div className="character-info" >
                <img src={info.image} alt="image" />
                <div className="info">
                  <h1>{info.name}</h1>
                  <p>{info.gender} - {info.status}
                  </p>
                  <p>Specie {info.species} </p>

                  <div className="localization">
                    <span>Last known locatilazion</span>
                    <p>At ep 480 Going back to Earth</p>
                  </div>
                </div>
              </div>
            )
          }))}
        </div>
      </div>
    </>
  );
}

