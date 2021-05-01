import styled from 'styled-components';

export const Root = styled.button`
    display: flex; 
    flex-grow: 1; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    background-color: transparent; 
    outline: none; 
    border: none;
    @media (max-width: 500px) {
        flex-direction: column;
`;