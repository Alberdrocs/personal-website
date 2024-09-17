import React from 'react';
import '../css/About.css';

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
          <p>My name is Alberto Gonzalez Abril, I am an enthusiastic and dedicated person originating 
            from Spain, currently doing a Masters on Artificial Intelligence at
            MTU here in Ireland. I decided to come to Ireland to finish my bachelor's degree in 2023 
            after spending a semester here as part of the Erasmus+ program during 2022 and falling in 
            love with the country and its diversity of people. After finishing my bachelor's on Software 
            Development, I decided to further my studies in AI, which is a topic I'm quite fascinated by 
            and think it's going to lead to great advances during the next few years. Alongside my academic pursuits, I'm currently
            working in a part-time job, demonstrating my commitment to balancing professional
            responsibilities with educational endeavors.</p>
            <p>I have harbored a deep fascination for computers and programming from a young age,
            starting a self-taught journey into the realm of coding during my childhood, which has led me
            to acquire proficiency in various programming languages and tools independently.</p>
            <p>I have been able to put these abilities to the test in an academic environment during my years
            in college, delivering great results in both individual and group projects. I've worked with
            colleagues interested in achieving good results as well as those those who did not, thus
            requiring additional effort and adapting to constant changes in workload distribution.</p>
            <p>I have also been exposed to a professional environment during my internship at a Game
            Development company, where I worked in both already existing systems as well as creating
            new ones from scratch, efficiently communicating with my superiors to achieve all of the
            projects specifications and goals.</p>
            <p>I think my international exposure has equipped me with valuable interpersonal and time
            management skills. As I near the end of my Bachelor's program, I'm eager to start contributing
            to the world of software engineering.</p>
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
                <p>Vocational training course where I learned systems configuration and management, native application development 
                  with Android Studio, multimedia integration, and ERP-CRM systems management.</p>
              </li>
              <li>
                <h3>Bachelors in Computer Engineering</h3>
                <h4>Universidad Jaume I (Spain)</h4>
                <p>2020 - 2023</p>
                <p>Education in computer science with a focus on programming, software engineering, systems administration, 
                  networks, databases, and business management. Completed the first three years of the degree and then moved to 
                  Ireland to finish my education there.</p>
              </li>
              <li>
                <h3>Bachelors (Honours) in Software Development</h3>
                <h4>Munster Technological University (Ireland)</h4>
                <p>2023 - 2024</p>
                <p>Completed a Bachelors of Science with a Upper Second Class Honours, working on RESTful web services and mobile 
                  applications development, Progressive Web Applications, machine learning, 
                  big data analytics, and containerization (Docker, Kubernetes).</p>
              </li>
              <li>
                <h3>Masters in Artificial Intelligence</h3>
                <h4>Munster Technological University (Ireland)</h4>
                <p>2024 - 2025</p>
                <p>Masters degree starting on September 2024 where I will learn how to use and develop intelligent computer systems 
                  that can learn from experience, recognise patterns in vast amounts of data and reason strategically in complex 
                  decision making situations. </p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
  
      </div>
    );
  }

export default About;