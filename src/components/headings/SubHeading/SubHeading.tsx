import React from 'react';
import { Container, Text } from './SubHeading.styled';

interface Props {
  title: string;
}

function SubHeading({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default SubHeading;