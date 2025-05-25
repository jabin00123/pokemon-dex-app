import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PokemonCard = ({ pokemon, onAdd }) => {
  const navigate = useNavigate();


  return (
    <Card>
      <Image src={pokemon.img_url} alt={pokemon.name} onClick={() => navigate(`/detail/${pokemon.id}`)} />
      <Name>{pokemon.korean_name}</Name>
      <p>No. {pokemon.id}</p>
      <AddButton onClick={() => onAdd(pokemon)}>추가</AddButton>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  padding: 0.5rem;
  width: 150px;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  cursor: pointer;
`;

const Name = styled.h4`
  margin: 0.5rem 0;
`;

const Type = styled.p`
  color: gray;
`;

const AddButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(237, 68, 49);  
  color: white;
  border: none;
  border-radius: 6px;
`;

export default PokemonCard;
