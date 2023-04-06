import React from "react";
import BigTitle from "../Global/BigTitle";
import SmallTitle from "../Global/SmallTitle";
import '../Hero/Hero.css';
import Button from "../Global/Button";

function Hero() {
    return (

        <div id="hero">
            <div id="hero-container">
                <SmallTitle title="Welcome to the Kaffen" fontSz="14px" />
                <BigTitle title="The London 
        Coffee House" fontSz="70px" margin="0 0 40px 0" />
                <span><Button buttonTitle="Explore More" fontSz="16px" fontCl="#0A0B0D" padding="10px 25px" backgroundCl="#E8E8E8" border="1px #E8E8E8 solid" margin="0px 15px 0px 0px" /></span>
                <span><Button buttonTitle="Get Delivery" fontSz="16px" fontCl="#fff" padding="10px 25px" backgroundCl="transparent" border="1px #E8E8E8 solid" /></span>
            </div>

        </div>


    );
}

export default Hero;