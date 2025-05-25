import React from 'react';
import styled from 'styled-components';

const Dashboard = ({ selected, onRemove }) => {

  const EMPTY_IMAGE = '/poketball.jpg'; // 기본 이미지 URL

  const filledSlots = [...selected, ...Array(6 - selected.length).fill({ id: null, img_url: EMPTY_IMAGE, isEmpty: true })];
  return (
    <Container>
      <Wrapper>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '1rem',
        color: 'rgb(213, 54, 54)',
        fontSize: '1.5rem'
      }}>나만의 포켓몬</h2>
      <CardContainer>
        {filledSlots.map((poke, index) => (
          <Card key={index}>
            <img src={poke.img_url} alt={poke.korean_name || '빈 슬롯'} width="80" />
            {!poke.isEmpty && (
              <>
                <p>{poke.korean_name}</p>
                <DeleteButton onClick={() => onRemove(poke.id)}>삭제</DeleteButton>
              </>
            )}
          </Card>
        ))}
      </CardContainer>
    </Wrapper>

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

const Wrapper = styled.div`
  padding: 1rem;
  width: 90vw;
  border-radius: 16px;
  background: hsl(0, 0%, 95.29411764705881%);
  justify-content: center; 
  margin: 0 auto;
`;

const CardContainer = styled.div`


  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;            
  max-width: 100%;               
  overflow-x: auto;
  justify-content: center;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const DeleteButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgb(237, 68, 49);  
  color: white;
  border: none;
  border-radius: 6px;
`;


export default Dashboard;
