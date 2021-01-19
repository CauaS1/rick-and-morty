import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import './index.css';

export default function Character(props) {
  const [character, setCharacter] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    async function getCharacter() {
      const response = await api.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    }
    getCharacter();
  }, []);


  return (
    <>
      <Header />

      <div className="character-container">
        {character && (
          <div className="character">
            <img src={character.image} alt="" />
            <h1>{character.name} - ID:{character.id}</h1>
            <div className="information">
              <h5>BASIC INFO</h5>
              <p>Currently Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
              <p>Native Specie: {character.species}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}