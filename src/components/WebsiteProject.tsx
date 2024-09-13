

function WebsiteProject() {
    return (
      <div className="container">
        <h1 className="my-4">Personal Website</h1>
        <br></br>

        <div className="row mb-5 section">
          <div className="col-md-4 section-title">
            <h2>What is it?</h2>
          </div>
          <div className="col-md-8 section-content">
          <p>This website is a fully responsive personal online resume that showcases my professional journey, 
            skills and projects. It was designed and developed entirely by me during my free time in summer, 
            as a way of getting my skills in web development up to date with current technologies and frameworks.</p>
          <p>This site highlights my abilities in web, software, and game development, and it serves as a central 
            hub where potential employers, collaborators, and clients can explore my work, 
            learn about my background, and connect with me directly.</p>
          </div>
        </div>
        <hr />

        <div className="row section">
          <div className="col-md-4 section-title">
            <h2>How was it done?</h2>
          </div>
          <div className="col-md-8 section-content">
            <p>This website was built using React for the front end and Bootstrap for the styling and layout. 
              React's component-based architecture allowed me to create a dynamic and interactive user experience, 
              where each section of the site is modular and easy to maintain. React ensures that the site loads 
              quickly and runs smoothly across all devices. </p>
            <p>Bootstrap made creating a consistent, mobile-friendly interface that adapts seamlessly to different 
              screen sizes an easy task. The combination of both technologies allowed for rapid development while 
              maintaining high standards of design and functionality, resulting in a visually appealing and easy to use website.</p>
          </div>
        </div>

        </div>
    );
}

export default WebsiteProject;