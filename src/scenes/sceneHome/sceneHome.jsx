import React from "react";
import { SplittedText } from './components/splittedText';
import './components/animatedText.css';
import { Background } from './components/background/background';
import RhombusButton from './components/rhombusButton/rhombusButton';
import { Root } from './components/root';
import { t } from '../../common/localization/t';

export function Home() {
    return (
        <>
            <Background/>
            <Root>
                <SplittedText text={t('sceneHome:splittedText.1')}/>
                <RhombusButton/>  
                <SplittedText text={t('sceneHome:splittedText.2')}/>
            </Root>
        </>
    )
}

