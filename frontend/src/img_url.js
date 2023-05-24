import React from 'react';

function ImageDisplay({ imageUrl }) {
  return (
    <img src={imageUrl} alt="Image" />
  );
}

export default ImageDisplay;
