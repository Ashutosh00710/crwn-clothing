import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CoustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CoustomButton;