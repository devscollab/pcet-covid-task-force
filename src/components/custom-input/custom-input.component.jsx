import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ handleChange, customStyle, ...otherParams }) => (
    <input
        className="custom-input"
        onChange={handleChange}
        style={customStyle}
        {...otherParams}
    />
);

export default CustomInput;
