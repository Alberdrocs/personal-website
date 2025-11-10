import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="container">
      <h1 className="my-4">Personal Information</h1>
      <br></br>
      {/* Who I Am Section */}
      <div className="row mb-5 section">
        <div className="col-md-4 section-title">
          <h2>Background</h2>
        </div>
        <div className="col-md-8 section-content">
          <p>
            My name is Alberto Gonzalez Abril. I am an enthusiastic and
            dedicated software engineer from Spain. I first moved to Ireland in
            2022 through the Erasmus+ program and quickly grew fond of the
            country's culture, diversity, and welcoming environment. That
            experience led me to return to complete my bachelor's degree in
            Software Development in 2023, followed by a Master's degree in
            Artificial Intelligence at MTU, driven by my fascination with
            machine learning, deep learning, NLP, and the transformative
            potential of AI in the coming years.
          </p>
          <p>
            I have harbored a deep fascination for computers and programming
            from a young age, starting a self-taught journey into the realm of
            coding during my childhood, which has led me to acquire proficiency
            in various programming languages and tools independently.
          </p>
          <p>
            Throughout my academic journey, I consistently delivered strong
            results in both individual and group projects, collaborating with
            diverse teams and adapting to varying levels of engagement,
            responsibility, and project complexity.
          </p>
          <p>
            I have also been exposed to a professional environment during my
            internship at a Game Development company, where I worked in both
            already existing systems as well as creating new ones from scratch,
            efficiently communicating with my superiors to achieve all of the
            projects specifications and goals. After that, I also worked in
            rebuilding an outdated website for a local company in my hometown,
            delivering a secure, performant, and modern user experience with
            React, TypeScript, and Firebase.
          </p>
          <p>
            More recently, I relocated to Madrid to join Amazon as a Software
            Development Engineer intern, where I worked across the full
            development lifecycle: writing design documents, implementing and
            testing features, maintaining CI/CD pipelines, and collaborating
            with engineers across teams.
          </p>
          <p>
            My international and multi-environment background has shaped me into
            someone who is adaptable, communicative, and comfortable working in
            diverse, fast-paced settings. I am now actively looking for new
            opportunities where I can continue contributing as a software
            engineer and take on new challenges that allow me to grow both
            technically and professionally.
          </p>
        </div>
      </div>
      <hr />

      {/* Education Section */}
      <div className="row mb-5 section">
        <div className="col-md-4 section-title">
          <h2>Education</h2>
        </div>
        <div className="col-md-8 section-content">
          <ul className="education-list">
            <li>
              <h3>Advanced Technician in Multiplatform App Development</h3>
              <h4>IES El Caminas (Spain)</h4>
              <p>2018 - 2020</p>
              <p>
                Vocational training course where I learned systems configuration
                and management, native application development with Android
                Studio, multimedia integration, and ERP-CRM systems management.
              </p>
            </li>
            <li>
              <h3>Bachelors in Computer Engineering</h3>
              <h4>Universidad Jaume I (Spain)</h4>
              <p>2020 - 2023</p>
              <p>
                Education in computer science with a focus on programming,
                software engineering, systems administration, networks,
                databases, and business management. Completed the first three
                years of the degree and then moved to Ireland to finish my
                education there.
              </p>
            </li>
            <li>
              <h3>Bachelors (Honours) in Software Development</h3>
              <h4>Munster Technological University (Ireland)</h4>
              <p>2023 - 2024</p>
              <p>
                Completed a Bachelors of Science with a Upper Second Class
                Honours, working on RESTful web services and mobile applications
                development, Progressive Web Applications, machine learning, big
                data analytics, and containerization (Docker, Kubernetes).
              </p>
            </li>
            <li>
              <h3>Masters in Artificial Intelligence</h3>
              <h4>Munster Technological University (Ireland)</h4>
              <p>2024 - 2025</p>
              <p>
                Masters of Science with a study focused on topics such as deep
                learning, natural language processing, and machine vision.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
