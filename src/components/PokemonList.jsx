import React from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

//포켓몬 리스트로 보여주는 
const PokemonList = ({ data, onAdd }) => {
  return (
    <Container>
      <ListWrapper> 
      {data.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} onAdd={onAdd} />
      ))}
    </ListWrapper>
    </Container>

  );
};



const Container = styled.div`
  width: 100vw;
  min-height: 10vh;
  padding: 1rem;
  background-color: #ffe0b2;  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListWrapper = styled.div`
  border-radius: 16px;
  padding: 1rem;
  max-width: 1500px;
  width: 100%;
  background-color: hsl(0, 0%, 95.29411764705881%);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export default PokemonList;
