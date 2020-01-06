import React from 'react';

import './coustom-button.styles.scss';

const CoustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`
        ${isGoogleSignIn ? 'google-sign-in': ''} 
        ${inverted ? 'inverted': ''}
        custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CoustomButton;