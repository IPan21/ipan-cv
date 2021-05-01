import React from "react";
import { InputForm  } from './components/inputForm/inputForm';
import { Root } from '../../common/root';
import { Sphere } from './components/clock/sphere';
import { Clock } from './components/clock/clock';

export function Contacts() {
    return (
        <Root>
            <InputForm/>
            <div>
                <Clock/>
                <Sphere />
            </div>
        </Root>
    )
};