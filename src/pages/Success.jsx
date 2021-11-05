import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
`;

const Success = () => {
  //TODO
  //create an order

  return (
    <Container>
      Successful. Your order is being prepared...
      <Button>Go to Homepage</Button>
    </Container>
  );
};

export default Success;
