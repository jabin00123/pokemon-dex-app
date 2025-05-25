import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../mock';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  return (
    <Container>
      <Card>
        <img src={pokemon.img_url} alt={pokemon.korean_name} width="150" />
        <h2 style={{
          color: 'rgb(213, 54, 54)',
          fontSize: '1.5rem',
          margin: '0.5rem 0'
        }}>{pokemon.korean_name}</h2>
        <p>타입 : {pokemon.types.join(', ')}</p>
        <p>{pokemon.description}</p>
        <Button onClick={handleGoBack}>뒤로 가기</Button>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe0b2;  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 2rem;
  text-align: center;
  max-width: 400px;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: hsl(0, 0%, 0%);  
  color: white;
  border: none;
  border-radius: 6px;
`;

export default Detail;
