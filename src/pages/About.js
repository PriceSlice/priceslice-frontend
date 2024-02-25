import react from "react"
import "./About.css"
const About = () => {
    return (
        <div className="about">
            <h1 className="about-us-title">
            About Us
            </h1>
            <p>Click for our LinkedIn profile</p>
            <div className="profiles">
                <div className="profile-card">
                    <a href="https://www.linkedin.com/in/vincent-cimino/">
                        <img className="float-right" src='img/vince.jpg' alt="Vince Cimino"/>
                    </a>
                </div>
                <div className="profile-card">
                    <a href="https://www.linkedin.com/in/dk-kim4312/">
                        <img src='img/dk.jpg' alt="DK Kim"/>
                    </a>
                </div>
                <div className="profile-card">
                    <a href="https://github.com/GeWangzi">
                        <img className="float-right" src='img/alex.jpg' alt="Alex Ge"/>
                    </a>
                </div>
                <div className="profile-card">
                    <a href="https://www.linkedin.com/in/colinluangrath/">
                        <img src='img/colin.jpg' alt="Colin Luangrath"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default About;