import React, { useState, useEffect } from 'react';
import '../pages_styles/Galerija.css';
import AOS from 'aos';
import { projectStorage } from '../config/firebase.js';

function Galerija() {
  const [folders, setFolders] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 1500
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  useEffect(() => {
    const storageRef = projectStorage.ref();

    storageRef.listAll().then((res) => {
      const folderPromises = res.prefixes.map((folderRef) => {
        const folderName = folderRef.name;

        return folderRef.listAll().then((folderRes) => {
          const imagePromises = folderRes.items.map((itemRef) =>
            itemRef.getDownloadURL()
          );

          return Promise.all(imagePromises).then((imageUrls) => ({
            folderName,
            imageUrls,
          }));
        });
      });

      Promise.all(folderPromises).then((foldersData) => {
        setFolders(foldersData);
      });
    });
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container-fluid gallery-container">
      {folders.map((folder) => (
        <div className="row justify-content-around" key={folder.folderName}>
          <h1 className="album-title text-center" data-aos="fade-right" data-aos-offset="200" data-aos-once="true">{folder.folderName}</h1>
          {folder.imageUrls.map((url, index) => (
            <div
              className="col-4 img-column"
              key={url}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              data-aos-offset="200" data-aos-once="true"
              onClick={() => openModal(url)}
            >
              <img className="img-fluid" src={url} alt="Firebase Storage" />
            </div>
          ))}
        </div>
      ))}
      {selectedImage && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content" data-aos="fade" onClick={closeModal}>
            <img
              className="modal-image"
              src={selectedImage}
              alt="Modal"
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Galerija;
