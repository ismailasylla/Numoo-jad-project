import React from 'react';
import { Avatar } from 'antd';
import { Container, CardHeader, Name, About, Location } from './CoachShortProfile.styled';

interface Props {
  name: string;
  about: string;
  location: string;
}

function CoachShortProfile({ name, about, location }: Props) {
  return (
    <Container>
      <Avatar
        size={64}
      >A</Avatar>
      <CardHeader>
        <Name>{name}</Name>
        <About>{about}</About>
        <Location>{location}</Location>
      </CardHeader>
    </Container>
  )
}

export default CoachShortProfile;