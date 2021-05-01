import React from 'react';
import { Field } from 'formik';
import { Underline } from './underline';
import { LIGHT_GREY, CYAN } from '../../../../../common/colorsPalette';
import styled from 'styled-components';

export const InputField = ({name, placeholder, validate, error, touched, component, rows}) => (
    <Underline error={error} touched={touched}>
        <StyledField name={name} placeholder={placeholder} validate={validate} component={component} rows={rows} spellCheck="false" autoComplete="off"/>
    </Underline> 
);

export const StyledField = styled(Field)`
  outline: none; 
  border: none; 
  background-color: ${LIGHT_GREY};
  color: ${CYAN};
  margin: 0px;
  width: 96%; 
  min-height: 40px;
  font-family: Helvetica Neue;
  font-size: 12px;
  padding-left: 3%;
`;