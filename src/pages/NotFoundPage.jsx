import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  font-size: 1.25rem;
  color: ${({theme}) => theme.color.text};
`;

const NotFoundPage = () => {
  return (
    <Container>
      Not Found Page
    </Container>
  );
};

export default NotFoundPage;