import React from 'react';
import { Container, Text } from './LabelHeading.styled';

interface Props {
  title: string;
  isGreyed?: string;
  center?: string;
}

function LabelHeading({ title, isGreyed, center }: Props) {
  return (
    <Container center={center}>
      <Text isGreyed={isGreyed}>{title}</Text>
    </Container>
  )
}

export default LabelHeading;