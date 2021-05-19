import React from 'react';
import { Questions, CoachTypes, Header } from "components";

function Landing(props: any): JSX.Element {
  return (
    <div>
      <Header />
      <CoachTypes />
      <Questions />
    </div>
  )
}

export default Landing;