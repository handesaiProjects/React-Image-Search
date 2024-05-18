import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image }) => {
  const handleClick = () => {
    window.open(image.largeImageURL, '_blank');
  };

  return (
    <div className="image-item" onClick={handleClick}>
      <img src={image.webformatURL} alt={image.tags} className="image" />
    </div>
  );
};

export default ImageItem;
