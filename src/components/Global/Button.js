import React, { useState } from "react";
import '../Global/Global.css';
import { useEffect } from "react";

function Button({ buttonTitle, margin, fontSz, fontCl, border, backgroundCl, padding }) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const buttonStyle = {
        fontSize: fontSz,
        color: isHover ? "#0A0B0D" : fontCl,
        border: isHover ? "1px solid #D48521" : border,
        background: isHover ? "#D48521" : backgroundCl,
        padding: padding,
        textTransform: 'Uppercase',
        fontWeight: 400,
        borderRadius: '2px',
        margin: margin,
        fontFamily: 'Open Sans',
    }

    return (
        <button style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {buttonTitle}
        </button>
    );
}

export default Button;