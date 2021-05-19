import React from 'react';
import { Container, Text } from './SubHeading.styled';

interface Props {
  title: string;
  isGreyed?: string;
}

function SubHeading({ title, isGreyed }: Props) {
  return (
    <Container>
      <Text isGreyed={isGreyed}>{title}</Text>
    </Container>
  )
}

export default SubHeading;