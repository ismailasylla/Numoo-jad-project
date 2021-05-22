import React from "react";
import {
  JourneyWrapper,
  JourneyTitle,
  JourneyDescription,
  JourneyIconWrapper,
} from "./Journey.styled";
import { JourneyIconMatch as ICON_MATCH } from "../Journey/Journey.styled";
import { JourneyIconMeat as ICON_MEAT } from "../Journey/Journey.styled";
import { JourneyIconGrow as ICON_GROW } from "../Journey/Journey.styled";
import { ButtonStartJourney } from "components/buttons";

function Journey() {
  const data = [
    {
      ico: <ICON_MATCH title="M" />,
      title: "Match",
      description: "Match to a coach suited to your coaching needs.",
    },
    {
      ico: <ICON_MEAT title="M" />,
      title: "Meat",
      description: "Meat with your coach for as many as you want.",
    },
    {
      ico: <ICON_GROW title="G" />,
      title: "Grow",
      description: "Grow to acheive your goals as maximize your potential.",
    },
  ];
  return (
    <div>
      <JourneyWrapper>
        {data.map((item, key) => (
          <div key={key}>
            <JourneyIconWrapper>{item.ico}</JourneyIconWrapper>
            <JourneyTitle>{item.title}</JourneyTitle>
            <JourneyDescription>{item.description}</JourneyDescription>
          </div>
        ))}
      </JourneyWrapper>
      <ButtonStartJourney></ButtonStartJourney>
    </div>
  );
}

export default Journey;
