import React from 'react';

import "./Skills.css"
import react1 from "../../images/react1.png";
import html from "../../images/html (1).png";
import tailwind from "../../images/tailwind.png"


export default function Skills(){
    return(
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <div className="reactimg">
                        <img src={react1} alt="" className="reactimg2" />
                    </div>
                </div> 
                <div className="html">
                    <div className="htmlimg">
                        <img src={html} alt="" className="htmlimg1"/>
                    </div>
                </div>
                <div className="tailwind">
                    <div className="tailwindimg">
                        <img src={tailwind} alt="" className="tailwindimg1" />
                    </div>
                </div>
            </div>
        </div>
    )
}