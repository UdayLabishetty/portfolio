import "./FooterStyles.css";

import React from 'react';
import {FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Vellore Institute Of Technology,</p>
                        <p>Vellore.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    8106254580
                    </h4>
                    
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                        uday.labishetty2020@vitstudent.ac.in
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is Uday Labishetty. I am a student at Vellore Institute of Technology, Vellore.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <FaLinkedinIn size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer