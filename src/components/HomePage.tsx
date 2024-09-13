import Image from "react-bootstrap/Image"
import profilePicture from '../assets/profileImage.jpg'
import { Fragment } from 'react/jsx-runtime';

import '@fortawesome/fontawesome-free/css/all.min.css';

function HomePage(){
    return (
    <Fragment>
    <br/>
    <div className="row align-items-center intro-section">
          <div className="col-12 col-md-6 text-section">
            <h1>Hi, I'm Alberto Gonzalez</h1>
            <p>Welcome to my personal page! (Preview)</p>
          </div>
          <div className="col-12 col-md-6 image-section">
            
            <Image src={profilePicture} alt="Profile" className="profile-image" roundedCircle />
          </div>
        </div>
        
        {/* Detailed Info Section */}
        <div className="row detailed-section align-items-center">
          <div className="col-12 col-md-4 title-section">
            <h2>About Me</h2>
          </div>
          <div className="col-12 col-md-8 text-section">
            <p>
              Here is more detailed information about who I am, what I do, and
              my interests. This section can be as long as you need it to be.
              Add paragraphs as necessary to explain more about yourself.
            </p>
            <p>
              Here is more detailed information about who I am, what I do, and
              my interests. This section can be as long as you need it to be.
              Add paragraphs as necessary to explain more about yourself.
            </p>
            <p>
              Here is more detailed information about who I am, what I do, and
              my interests. This section can be as long as you need it to be.
              Add paragraphs as necessary to explain more about yourself.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="row contact-section">
          <div className="col-12 text-center">
            <h2>Feel free to contact me!</h2>
            <br/>
            <ul className="list-unstyled contact-list">
              <li><i className="fas fa-phone"></i> +34 600 52 37 14</li>
              <li><i className="fas fa-envelope"></i> alberto@gonzabril.es</li>
              <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/alberto-gonzalez-abril-5627901a1/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            </ul>
          </div>
        </div>
  </Fragment>
  );
}

export default HomePage;