import React from "react";
import styled from 'styled-components';
import { Title } from '../../../common/title';
import { Text } from '../../../common/text';
import { t } from '../../../common/localization/t';

export function TextContent() {
    return (
        <Root>
            <Title>{t('sceneAboutMe:title')}</Title>
            <Text>{t('sceneAboutMe:description')}</Text>
        </Root>
    )
}

const Root = styled.div`
    align-self: center;
    text-align: left;
    padding: 30px;
    max-width: 400px;
    @media (max-width: 480px) {
        padding: 20px;
      }
`;