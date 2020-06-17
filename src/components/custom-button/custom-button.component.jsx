import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';
// import './custom-button.styles.scss';

const CustomButtom = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CustomButtom;
