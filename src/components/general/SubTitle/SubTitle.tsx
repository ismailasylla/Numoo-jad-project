import React from 'react';
import { Container, Text } from './SubTitle.styled';

interface Props {
  title: string;
}

function SubTitle({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default SubTitle;