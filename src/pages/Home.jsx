import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  //const logos = '/pokemon.jpg';

  function handleClick() {
  navigate('/dex');
  }

  return (
    <div>
      <Container>
        <Logo src="/pokemon-logo.png" alt="로고 이미지" />
        <StartButton onClick={handleClick}>포켓몬 도감 시작하기</StartButton>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffe0b2; 
`;

const Logo = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;

const StartButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: rgb(237, 68, 49);
  color: white;
`;


export default Home;