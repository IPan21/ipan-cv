import React from "react";
import { MemoryGame } from './components/memoryGame/memoryGame';
import { Root } from '../../common/root';
import { TextContent } from './components/textContent';

export function AboutMe() {
    return (
        <Root>
            <TextContent/>
            <MemoryGame/>
        </Root>
    )
}