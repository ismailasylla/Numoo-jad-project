import React from 'react';
import { Questions, Image, CoachTypes, Header } from "components";

function Landing(props: any): JSX.Element {
  return (
    <div>
      <Header />
      <CoachTypes />
      <Image />
      <Questions />
    </div>
  )
}

export default Landing;