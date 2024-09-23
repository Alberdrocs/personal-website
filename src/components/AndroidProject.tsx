import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/ProjectMediaTab.css';


function AndroidProject() {

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
    { type: 'image', src: 'android-image-1.jpg' },
    { type: 'image', src: 'android-image-2.jpg' },
    { type: 'image', src: 'android-image-3.jpg' },
    { type: 'image', src: 'android-image-4.jpg' },
    { type: 'video', src: 'android-project-video.mp4' }, 
  ];

    return (
      <div className="container">
        <h1 className="my-4">Android Studio App</h1>
        <br></br>

        <div className="row mb-5 section">
          <div className="col-md-4 section-title">
            <h2>What is it?</h2>
          </div>
          <div className="col-md-8 section-content">
          <p>This project was developed as a Final Project for a vocational training course in Multi-platform 
            Application Development. It is an Android application that serves as a companion for the video-game 
            Monster Hunter World to help plan and create character's builds.</p>
          <p>It works by having a database with all of the weapons, armors, accessories and skills in the game 
            (which are more than a 500) and giving users an interface similar to the one in the game to select 
            all the equipment pieces for their character. Each equipment piece can come with up to 2 skills 
            attached, and this skills can be combined to grant greater and stronger effects. There are more 
            than a million possible combinations, so the app also offers filtering options to find the equipment 
            with certain skills, attributes, or levels, to facilitate the user experience.</p>
          </div>
        </div>
        <hr />

        <div className="row section">
          <div className="col-md-4 section-title">
            <h2>How was it done?</h2>
          </div>
          <div className="col-md-8 section-content">
            <p>The app was built using Android Studio and the Kotlin programming language. All the equipment 
              information is stored in a SQLite local database that is shipped with the app using the Room 
              persistence library, and is then accessed through data access objects.</p>
            <p>The app also uses Android technologies like Fragments and Data Binding, to offer a smooth and 
              adequate experience with reduced load times in a lifecycle-aware fashion to increase performance. 
              Though it is possible that some of the technologies may be outdated, as this project is more 
              than 4 years old, at the time of the development it used all brand-new innovations in Android 
              development. You can find the code for it on the <a href='https://github.com/Alberdrocs/MHWBuilder'>Github page</a>.</p>
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
      <Modal show={show} onHide={handleClose} centered size="sm">
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

export default AndroidProject;