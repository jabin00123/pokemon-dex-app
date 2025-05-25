import React, { createContext, useState } from 'react';

export const SelectedPokemonContext = createContext();

const SelectedPokemonProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const addPokemon = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      return alert('이미 선택된 포켓몬입니다.');
    }
    if (selected.length >= 6) {
      return alert('더 이상 선택할 수 없습니다.');
    }
    setSelected([...selected, pokemon]);
  };

  const removePokemon = (id) => {
    setSelected(selected.filter((poke) => poke.id !== id));
  };

  return (
    <SelectedPokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </SelectedPokemonContext.Provider>
  );
};

export default SelectedPokemonProvider;
