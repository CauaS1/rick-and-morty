import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import './index.css';

export default function Character(props) {
  const [character, setCharacter] = useState([]);
  const [origin, setOrigin] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    async function getCharacter() {
      const response = await api.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    }
    getCharacter();

    // async function getOrigin() {
    //   const response = await api.get(${character});
    //   setOrigin(response.data);
    // }
    // getOrigin();
  }, []);

  // console.log(origin);

  return (
    <>
      <Header />

      <div className="character-container">
        <div className="character">
          <img src={character.image} alt="" />
          <div className="information">
            <h1>{character.name} - ID:{character.id}</h1>
            <span>Basic Info</span>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Specie: {character.species}</p>
            <span>Origin</span>
            <p>From: {character.origin.name} -
           <a href="/location">About this planet</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}