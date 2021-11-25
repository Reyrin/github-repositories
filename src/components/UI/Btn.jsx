import React from "react";
import "./btn.scss";

function Btn({ children, ...props }) {
    return (
        <button {...props} className="Btn">
            {children}
        </button>
    );
}

export default Btn;
