import React from "react";
import backgroundImg from '../assets/background-img.png';
import styled from 'styled-components';

export function Root({children}) {
    return (
        <Base>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </Base>
    )
}

export const Base = styled.div`
display: flex; 
flex-grow: 1; 
justify-content: center;
align-items: center; 
background-color: transparent;
background-image: ${`url(${backgroundImg})`};
background-size: 200px;
background-position: left;
background-repeat: no-repeat;
@media (min-width: 480px) {
    min-height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 90vw;
`;