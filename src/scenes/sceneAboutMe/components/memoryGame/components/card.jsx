import styled from 'styled-components';

export const Card = styled.img`
  max-width: 90px; 
  max-height: 90px;
  margin: 5px; 
  border-radius: 10px; 
  @media (max-width: 768px) {
    max-width: 80px; 
    max-height: 80px;
    margin: 4px; 
  }
  @media (max-width: 480px) {
    max-width: 70px; 
    max-height: 70px;
    margin: 3px; 
    align-self: flex-start;
  }
  @media (max-width: 360px) {
    max-width: 60px; 
    max-height: 60px;
    margin: 3px; 
    align-self: flex-start;
  }
`;