import React from "react";
import "./Herosection.css";
import myimage1 from "../../images/myimage1.jpg";
export default function Herosection() {
    return (
        <div className="herosection">
        <div className="left">
      <div className="para">
        <p> Web Developer,</p>
      </div>
      <div className="herosectionh1">
         <h1>I'm <span>Aleena</span></h1>
      </div>
      <div className="stack">
         <h1>Front End Developer</h1>
      </div>
      <div className="para2">
         <p>Welcome to my website! I'm passionate about creating engaging and user-friendly web experiences. With expertise in front-end development technologies, I strive to deliver high-quality solutions that meet your needs.</p>
      </div>
        </div>
        <div className="right">
       <img src={myimage1} alt="" />
        </div>
        
     </div>
    );
}
