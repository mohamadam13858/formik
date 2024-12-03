import React from "react";

const PersonError = ({ children }) => {
    return (
        <span className=" d-block text-center text-danger">
            {children}
        </span>
    );
}

export default PersonError;
