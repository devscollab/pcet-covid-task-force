import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, customStyle, ...otherProps }) => (
    <button className="custom-button" style={customStyle} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
