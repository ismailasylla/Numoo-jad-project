import React from 'react';
import { Text } from './DescriptionHeading.styled';

interface Props {
  title: string;
  isGreyed?: string;
}

function DescriptionHeading({ title, isGreyed }: Props) {
  return (
    <Text isGreyed={isGreyed}>{title}</Text>
  )
}

export default DescriptionHeading;