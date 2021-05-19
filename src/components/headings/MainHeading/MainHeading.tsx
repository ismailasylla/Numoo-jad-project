import React from 'react';
import { Container, Text } from './MainHeading.styled';

interface Props {
  title: string;
}

function MainHeading({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default MainHeading;