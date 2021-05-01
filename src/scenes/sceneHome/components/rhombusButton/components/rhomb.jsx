import styled from 'styled-components';
import { CYAN, FUCHSIA } from '../../../../../common/colorsPalette';

export const Rhomb = styled.div`
margin: 50px;
width: 100px; 
height: 100px; 
border: 1px solid ${CYAN};
transform: rotate(45deg);
background-color: var(--background-color-main);
color: ${CYAN};
outline: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover {
  color: ${FUCHSIA};
  border-color: ${FUCHSIA};
  }
`;
