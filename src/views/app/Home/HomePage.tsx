import React from "react";
import { Questions, CoachTypes, Header } from "components";
import Journey from "components/general/Journey/Journey";

function Landing(props: any): JSX.Element {
  return (
    <div>
      <Header />
      <CoachTypes />
      <Questions />
      <Journey />
    </div>
  );
}

export default Landing;
