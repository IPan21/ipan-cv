import React from 'react';
import styled from 'styled-components';
import { CYAN, RED} from '../../../../../common/colorsPalette';

export function Underline({error, touched, children}){
    return(
        <Root error={error} touched={touched}>
            {children}
       </Root>   
    );
}

export const Root = styled.div`
    text-decoration: none;
    color: rgba(0,0,0,.4);
    z-index: 1;
    margin:0px;
    margin-bottom:5px;
    padding:0px;
    border:0 none;
    position: relative; 
    outline: none;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${props => props.error && props.touched ? RED : CYAN};
        visibility: ${props => props.error && props.touched ? 'visible' : 'hidden'};
        border-radius: 5px;
        transform: ${props => props.error && props.touched ? 'scaleX(1)' : 'scaleX(0)'};
        transition: .25s linear;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    &:focus-within::before,
    &:hover::before,
    &:focus::before {
        visibility: visible;
        transform: scaleX(1);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
`;