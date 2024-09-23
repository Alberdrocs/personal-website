import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/ProjectMediaTab.css';


function MinecraftProject() {

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
    { type: 'image', src: 'https://media.forgecdn.net/attachments/875/594/2024-04-13_12.png' },
    { type: 'image', src: 'https://media.forgecdn.net/attachments/875/595/2024-04-13_12.png' },
    { type: 'image', src: 'https://media.forgecdn.net/attachments/875/596/2024-04-21_14.png' }
  ];

    return (
      <div className="container">
        <h1 className="my-4">Minecraft Mod</h1>
        <br></br>

        <div className="row mb-5 section">
          <div className="col-md-4 section-title">
            <h2>What is it?</h2>
          </div>
          <div className="col-md-8 section-content">
          <p>This is a modification for the 3d sandbox video-game Minecraft, done as a Final Year Project for my 
            Bachelor's in Software Development. The mod takes inspiration from the “zombies” mode of the video-game 
            Call of Duty Black Ops Cold War and adds a myriad of new content with a central focus in enhancing the 
            atmospheric tension and player engagement, with a very challenging survival experience. </p>
          <p>This is achieved by introducing a new dimension that serves as the backdrop for an array of brand-new 
            undead entities that players must confront in order to obtain new materials to craft new tools and weapons. 
            To see more information about the mod as well as the download, follow this <a href='https://www.curseforge.com/minecraft/mc-mods/dark-aether-mod'>link</a>.</p>
          </div>
        </div>
        <hr />

        <div className="row section">
          <div className="col-md-4 section-title">
            <h2>How was it done?</h2>
          </div>
          <div className="col-md-8 section-content">
            <p>As the Minecraft version used (Minecraft: Java Edition) is built on the Java programming language, 
              all of the programming for this mod was done with this language. Leveraging the Minecraft Forge modding 
              framework, the mod achieves seamless integration with the existing game mechanics while introducing novel features. </p>
            <p>For the new types of enemies' AI, behavior trees were designed and programmed using Minecraft's AI Goal systems. 
              For the world generation, existing procedural generated algorithms were modified to meet the needs of the project. 
              Aside from programming, work on 3d modeling, rigging, animating and texturing using Blockbench was also performed. To see 
              the source code, you can view the <a href='https://github.com/Alberdrocs/DarkAetherCorruptionMod'>Github page</a>.</p>
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

export default MinecraftProject;