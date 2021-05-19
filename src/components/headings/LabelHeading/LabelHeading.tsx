import React from 'react';
import { Container, Text } from './LabelHeading.styled';

interface Props {
  title: string;
  isGreyed?: string;
}

function LabelHeading({ title, isGreyed }: Props) {
  return (
    <Container>
      <Text isGreyed={isGreyed}>{title}</Text>
    </Container>
  )
}

export default LabelHeading;