import React from 'react';
import { Container, CardHeader, Avatar, About, Location } from './CoachShortProfile.styled';
import { LabelHeading, IconHeading } from '../../../components';
import { images } from '../../../constants';

interface Props {
  pic: string;
  name: string;
  about: string;
  location: string;
  categories: Array<string>;
  languages: Array<string>;
}

function CoachShortProfile({ pic, name, about, location, categories, languages }: Props) {
  return (
    <Container>
      <Avatar
        src={pic}
      ></Avatar>
      <CardHeader>
        <LabelHeading isGreyed="true" title={name} />
        <About>{about}</About>

        <IconHeading img={images.LOCATION} title={location}></IconHeading>
        <IconHeading img={images.LANGUAGE} title={languages.join(", ")}></IconHeading>
        <IconHeading img={images.CATEGORIES} title={categories.join(", ")}></IconHeading>

      </CardHeader>
    </Container>
  )
}

export default CoachShortProfile;