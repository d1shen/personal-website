import React, { Component } from 'react';
import htmlImg from './../img/html-pic.jpg';

class Education extends Component {
    render () {
        return (
            <div className="condiv" align="left">
                <div className= "blur-card blue-gradient">
                  <h1 className = "blur-card-text">
                    University of Illinois at Urbana-Champaign
                  </h1 >
                  <h2 className = "blur-card-text"> 
                    <p>Bachelors of Science</p>
                    <p>Relevant Course work.</p>
                  </h2>
                    
                  <ul className = "blur-card-text">
                    <li>Data Structures and Algorithims</li>
                    <li>Linear Algebra with Computational Application</li>
                    <li>Discrete Structures</li>
                  </ul>
                </div>

                <div className= "blur-card blue-gradient">
                    <h1>Leland High School</h1>
                </div>
            </div>
        )
    }
}

export default Education;