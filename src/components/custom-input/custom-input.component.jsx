import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ handleChange, customStyle, ...otherParams }) => (
    <input
        className="custom-input"
        onChange={handleChange}
        style={customStyle}
        onFocus={(e) => {
            if (e.target.name === "dob" || e.target.name === "startCovidDate" || e.target.name === "endCovidDate" || e.target.name === "dateOfDose1" || e.target.name === "dateOfDose2") {
                e.target.type = "date";
            }
        }}
        onBlur={(e) => {
            if (e.target.name === "dob" || e.target.name === "startCovidDate" || e.target.name === "endCovidDate" || e.target.name === "dateOfDose1" || e.target.name === "dateOfDose2") {
                e.target.type = "text";
            }
        }}
        {...otherParams}
    />
);

export default CustomInput;
