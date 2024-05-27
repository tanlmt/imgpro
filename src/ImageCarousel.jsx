import React, { useState } from 'react';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';

const images = [image1, image2, image3, image4,image5];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Hình Ảnh</h2>
      <div>
        <button onClick={prevImage}>Prev</button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: '300px', height: '200px' }} />
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;