import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/introimg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="introimg" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi, I'm Uday Labishetty.</p>
            <h1>Frontend Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
};

export default HeroImg