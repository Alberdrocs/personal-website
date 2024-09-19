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
    { type: 'image', src: 'unreal-image-1.png' },
    { type: 'image', src: 'unreal-image-2.png' },
    { type: 'image', src: 'unreal-image-3.png' },
    { type: 'video', src: 'unreal-video.mp4' }, 
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
          <p>This project was developed for a Game Development module during my Software Development Bachelors at 
            MTU, and it was a group project done with two other students. The goal was to come up with a game idea, 
            make a Game Design Document with all the systems and mechanics the game would utilize, and then 
            program and develop a functional prototype.</p>
          <p>One of the requirements of the assignment was to include at least one of the 17 Sustainable Development 
            Goals as the main theme of the game. For ours, we choose the protection of biodiversity and ecosystems, 
            where the main objective was to protect endangered species from poachers.</p>
          </div>
        </div>
        <hr />

        <div className="row section">
          <div className="col-md-4 section-title">
            <h2>How was it done?</h2>
          </div>
          <div className="col-md-8 section-content">
            <p>The game was developed using Unreal Engine 5, and the workload was distributed between the three members 
              of the group. I was in charge of modeling the game environment and of programming the Main Character 
              Controller, alongside the weapons system.</p>
            <p>For the Player Controller I used a mix of Unreal's visual scripting and classic scripting with C++ 
              to achieve good controls for the player, like jumping, crouching, sliding and climbing smoothly. The 
              player could also pick and use weapons, as seen in the video below (however as we did not have any 
              audio or VFX person in our group, those components are missing).</p>
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