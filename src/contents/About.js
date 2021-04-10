import React, { Component } from 'react';
import profilepic from '../img/default.jpg';

class About extends Component {
    render () {
        return (
            <div className="condiv" align="left">
                <img src={profilepic} alt="ProfilePic" className="profilepic" style={{margin: 0}}></img>
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Allen Shen</h1>
                <h3>Student @ UIUC | Badminton Player | Pseudo Intellectual</h3>
                <br></br>
                <p>
                    I fondly remember building my first PC in 5th grade following a video from Linus Tech Tips. Now I am 19 and still trying to do cool shit. 
                    I am a full time student at the University of Illinois at Urbana-Champaign hoping to study <strong>Computer Science</strong>. In my free 
                    time I enjoy badminton, cycling, and reading.
                </p>
            </div>
        )
    }
}

export default About