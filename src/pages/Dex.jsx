import React from 'react'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useState } from 'react';
import MOCK_DATA from '../mock';

const Dex = () => {
  const [selected, setSelected] = useState([]);

  const addPokemon = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (selected.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setSelected([...selected, pokemon]); // 선택한 거 배열에 추가 
  };

  const removePokemon = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };
  //console.log('모의 데이터', MOCK_DATA);

  return (
    <div> 
      <Dashboard selected={selected} onRemove={removePokemon} />
      <PokemonList data={MOCK_DATA} onAdd={addPokemon} />
    </div>
  )
}

export default Dex;