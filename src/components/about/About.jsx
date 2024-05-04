import "./About.css";
import about from "../../images/about.png";

export default function About(){
    return(
        <div className="about">
        <div className="img">
           <img src={about} alt="" className="aboutimg" />
        </div>
        <div className="aboutsection">
           <div className="headingabout">
               <h1>ABOUT</h1>
           </div>
           <div className="headingh3about">
               <h3>Aspiring Web Developer and React Learner | Passionate about Innovating and Creating Solutions."
</h3>
           </div>
           <div className="paraabout">
               <p>I am a passionate beginner in web development, currently immersing myself in the exciting world of React. As I journey through this dynamic field, I aim to blend creativity with technical prowess to craft engaging and user-friendly digital experiences. Constantly learning and evolving, I aspire to contribute meaningfully to the ever-evolving landscape of web development.</p>
           </div>
           <div className="para1about">
               <p>Throughout my journey as a beginner in web development, I've embarked on numerous projects that have honed my skills and fueled my passion for creating innovative solutions. I've eagerly participated in hackathons, embracing the challenges they bring as opportunities to expand my knowledge and collaborate with like-minded individuals. Each project and hackathon has been a stepping stone in my learning journey, equipping me with valuable experience and insights into the ever-evolving tech industry.

</p>
           </div>
           <div className="btnabout">
               <button className="btnabout1">Download CV</button>
           </div>
        </div>
       </div>
    )
}