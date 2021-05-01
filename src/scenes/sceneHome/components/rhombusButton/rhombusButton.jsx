import React from "react";
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';  
import { Rhomb } from './components/rhomb';
import { Text } from './components/text';
import { t } from '../../../../common/localization/t';

const RhombusButton = () => (
  <NavLink exact to='/contacts'>
    <Rhomb>
      <Text>{t('sceneHome:rhombusButton.text')}</Text>
    </Rhomb>  
  </NavLink>
);

export default withRouter(RhombusButton);
      