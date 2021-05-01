import React, { useEffect, useState } from "react";
import moment from 'moment';
import styled from 'styled-components';
import { CYAN } from '../../../../common/colorsPalette';

const DATE_FORMAT = 'HH:mm:ss';

export function Clock () {
    const [time, setTime] = useState(moment(new Date()).format(DATE_FORMAT));

    useEffect (() => {
      const interval = setInterval(() => setTime(moment(new Date()).format(DATE_FORMAT)), 1000);
      return () => clearInterval(interval);
    },[])   

    return (
        <Root>{time}</Root>
    );
}

export const Root = styled.div`
    color: ${CYAN};
    font-size: 40px;
    font-family: 'Orbitron', sans-serif;
`;