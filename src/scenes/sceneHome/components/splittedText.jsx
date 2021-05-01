import React from "react";
import './animatedText.css';
import { HorizontalSpace } from '../../../common/horizontalSpace';

export function SplittedText({text}) {
    return (
        <div style={styles.root}>
            {text.split('').map(function(char, index){
                    if(char === ' '){
                        return <HorizontalSpace/>
                    }
                return <div className='grow' key={index}>{char}</div>;
            })}
        </div>
    );
}

const styles = { root: { display: 'flex', flexDirection: 'row' } };