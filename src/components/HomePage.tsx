import Image from "react-bootstrap/Image";
import profilePicture from "../assets/profileImage.jpg";
import { Fragment } from "react/jsx-runtime";

import "@fortawesome/fontawesome-free/css/all.min.css";

function HomePage() {
  return (
    <Fragment>
      <br />
      <div className="row align-items-center intro-section">
        <div className="col-12 col-md-6 text-section">
          <h1>Hi, I'm Alberto Gonzalez</h1>
          <p>Welcome to my personal page!</p>
        </div>
        <div className="col-12 col-md-6 image-section">
          <Image
            src={profilePicture}
            alt="Profile"
            className="profile-image"
            roundedCircle
          />
        </div>
      </div>

      {/* Detailed Info Section */}
      <div className="row detailed-section align-items-center">
        <div className="col-12 col-md-4 title-section">
          <h2>About Me</h2>
        </div>
        <div className="col-12 col-md-8 text-section">
          <p>
            This page serves as an online resume/portfolio, useful for getting
            to know a little bit more about me, my experience, education,
            projects, and goals. It's a window into my academic and professional
            trajectory and all the skills I've acquired through the years.
          </p>
          <p>
            You can find a number of projects I've worked on, with most of them
            containing the actual code for it, in case you want to check for
            yourself the approaches I take in regards to coding. The projects'
            page is updated regularly whenever a new program or app is
            developed.
          </p>
          <p>
            I hold a Master's degree in Artificial Intelligence, where I focused
            on deep learning, NLP, and computer vision. Most recently, I worked
            as a Software Development Engineer at Amazon, contributing across
            the full software development lifecycle, including design documents,
            feature implementation, testing strategies, and CI/CD pipelines.
          </p>
          <p>
            I'm currently seeking new opportunities where I can continue to
            grow, solve meaningful problems, and contribute to impactful
            products. While I've lived in Ireland for several years and remain
            open to roles there (especially in Cork), I'm focused on finding a
            new position in Madrid, but I'm also flexible about relocating for
            the right position.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row contact-section">
        <div className="col-12 text-center">
          <h2>Feel free to contact me!</h2>
          <br />
          <ul className="list-unstyled contact-list">
            <li>
              <i className="fas fa-phone"></i> +34 600 52 37 14
            </li>
            <li>
              <i className="fas fa-envelope"></i> alberto@gonzabril.es
            </li>
            <li>
              <i className="fab fa-linkedin"></i>{" "}
              <a
                href="https://www.linkedin.com/in/alberto-gonzalez-abril-5627901a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
