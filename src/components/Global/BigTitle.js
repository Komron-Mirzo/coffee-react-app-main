import React from "react";
import './Global.css';

function BigTitle({ fontSz, title, margin, textAlign }) {
    const bigTitle = {
        fontSize: fontSz,
        color: "#fff",
        fontFamily: "'Cinzel Decorative', cursive",
        margin: margin,
        textAlign: textAlign,
    }

    return (

        <h1 style={bigTitle}>
            {title}
        </h1>

    );
}

export default BigTitle;