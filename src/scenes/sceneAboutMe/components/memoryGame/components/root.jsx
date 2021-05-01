import styled from 'styled-components';

export const Root = styled.div`
display: flex; 
flex-wrap: wrap; 
width: 400px;
@media (max-width: 480px) {
    max-width: 310px; 
  }
@media (max-width: 360px) {
  max-width: 270px; 
}
`;