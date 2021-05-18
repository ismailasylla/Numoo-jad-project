import React from 'react';
import { Container, Text } from './LabelHeading.styled';

interface Props {
  title: string;
}

function LabelHeading({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default LabelHeading;