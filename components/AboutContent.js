import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import react1 from '../assets/react1.png';
import react2 from '../assets/react2.jpeg';
import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>I am a Front-end Developer. I am very enthusiastic to learn and develop new technologies.</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;