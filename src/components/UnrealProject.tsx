import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/ProjectMediaTab.css';


function UnrealProject() {

  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (index:any) => {
    setCurrentIndex(index);
    setIsVideo(mediaItems[index].type === 'video');
    setShow(true);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex === 0 ? mediaItems.length : currentIndex) - 1;
    setCurrentIndex(prevIndex);
    setIsVideo(mediaItems[prevIndex].type === 'video');
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setCurrentIndex(nextIndex);
    setIsVideo(mediaItems[nextIndex].type === 'video');
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (event:any) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (show) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, currentIndex]);

  const mediaItems = [
    { type: 'image', src: '/unreal-image-1.png' },
    { type: 'image', src: '/unreal-image-2.png' },
    { type: 'image', src: '/unreal-image-3.png' },
    { type: 'video', src: '/unreal-video.mp4' }, // Replace with your video URLs
  ];

    return (
      <div className="container">
        <h1 className="my-4">Unreal Engine Game Prototype</h1>
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
        <hr />

        <div className="row section">
        <div className="col-md-4 section-title">
          <h2>Media</h2>
        </div>
        <div className="col-md-8 section-content">
          <div className="row">
            {mediaItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="img-fluid"
                    onClick={() => handleShow(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <video
                    controls
                    className="img-fluid"
                    onClick={() => handleShow(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Media Expansion */}
      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Body className="position-relative">
          {isVideo ? (
            <video controls className="expanded-media">
              <source src={mediaItems[currentIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={mediaItems[currentIndex].src} alt="Expanded Media" className="expanded-media" />
          )}
          {/* Left Arrow */}
          <Button variant="light" className="position-absolute top-50 start-0 translate-middle-y" onClick={goToPrevious}>
            &#8249;
          </Button>
          {/* Right Arrow */}
          <Button variant="light" className="position-absolute top-50 end-0 translate-middle-y" onClick={goToNext}>
            &#8250;
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UnrealProject;