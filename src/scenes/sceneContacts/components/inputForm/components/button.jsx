import styled from 'styled-components';
import { CYAN, FUCHSIA } from '../../../../../common/colorsPalette';

export const Button = styled.button`
    padding: 5px; 
    border: 1px solid ${CYAN};
    border-radius: 5px; 
    background-color: transparent; 
    color: ${CYAN};
    &:hover {
        color: ${FUCHSIA};
        border-color: ${FUCHSIA};
    }
`;