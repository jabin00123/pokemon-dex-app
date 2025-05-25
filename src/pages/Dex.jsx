import React from 'react'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useState } from 'react';
import MOCK_DATA from '../mock';

const Dex = () => {
  const { selected, addPokemon, removePokemon } = useContext(SelectedPokemonContext);

  return (
    <div> 
      <Dashboard selected={selected} onRemove={removePokemon} />
      <PokemonList data={MOCK_DATA} onAdd={addPokemon} />
    </div>
  )
}

export default Dex;