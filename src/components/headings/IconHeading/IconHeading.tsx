import React from 'react';
import { Container, Text, Icon } from './IconHeading.styled';

interface Props {
  title: string;
  img: string;
}

function IconHeading({ title, img }: Props) {
  return (
    <Container>
      <Icon src={img}></Icon>
      <Text>{title}</Text>
    </Container>
  )
}

export default IconHeading;