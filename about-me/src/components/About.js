import React, { useState } from 'react';
import '../styles/components/About.css';
import profileImage from '../assets/profile_pic.jpg';

const About = () => {
  // State to control the visibility of the detailed content
  const [showDetails, setShowDetails] = useState(false);

  // Function to handle mouse enter (show details)
  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  // Function to handle mouse leave (hide details)
  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <section id="about" className="about">
      {/* Conditionally render About Me text based on showDetails */}
      {!showDetails && (
        <h1
          className="aboutmetag"
          onMouseEnter={handleMouseEnter}  // Show details on hover
          onMouseLeave={handleMouseLeave}  // Hide details when hover ends
        >
          Who I AM ?
        </h1>
      )}

      {/* Conditionally render the detailed content based on showDetails */}
      {showDetails && (
        <div className="about-details show">
          <div className="profile-pic-container">
            <img src={profileImage} alt="Your Name" className="profile-pic" />
          </div>
          <div className="about-content">
                <p>
                    Hi, I'm <strong>Quik Zi Hao</strong>.
                </p>
                <p>
                    I graduated with a degree in Mechanical Engineering, but my passion for technology and innovation led me to the exciting world of software development. Now, I specialize in the AI field, building intelligent systems that solve real-world problems.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new worlds in video games, diving into the immersive stories of anime, or experimenting with creative coding projects. I believe that technology, creativity, and passion can drive meaningful change, and I aim to reflect that in every project I work on.
                </p>
                <p>
                    Scroll down to discover some of the projects I’ve worked on. Each one is a step in my journey to merge creativity and technology into impactful solutions. Let’s create something amazing together!
                </p>
            </div>
        </div>
      )}
    </section>
  );
};

export default About;
