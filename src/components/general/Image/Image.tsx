import React from 'react';
import { images } from "../../../constants";
import { Container } from './Image.styled';

function Image() {
  return (
    <Container
      imageURL={images.COM_IMAGE_1}
    />
  )
}

export default Image;