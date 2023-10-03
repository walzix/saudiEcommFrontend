import React from "react";
import './PrimaryButton.css'

function PrimaryButton({ onClick, title, width, height, fontSize, margin, disabled }) {
    return (
        <button
            onClick={(x) => { onClick ? onClick(x) : console.log() }}
            disabled={disabled ? disabled : false}
            className="PrimaryButton"
            style={{
                width: width ? width : "auto",
                height: height ? height : "auto",
                fontSize: fontSize ? fontSize : "medium",
                margin: margin ? margin : "0px",
            }}
        >{title ? title : ""}</button>
    )
}

export default PrimaryButton;