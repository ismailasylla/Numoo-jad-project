import React from 'react';
import { Container, Text } from './DescriptionHeading.styled';

interface Props {
  title: string;
  isGreyed?: string;
}

function DescriptionHeading({ title, isGreyed }: Props) {
  return (
    <Container>
      <Text isGreyed={isGreyed}>{title}</Text>
    </Container>
  )
}

export default DescriptionHeading;