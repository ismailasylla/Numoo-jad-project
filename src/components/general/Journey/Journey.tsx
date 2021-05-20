import React from "react";
import {
  JourneyWrapper,
  JourneyTitle,
  JourneyIcon,
  JourneyDescription,
} from "./Journey.styled";
import { images } from "../../../constants";

function Journey() {
  const data = [
    {
      img: images.LIFE_ICON,
      title: "Match",
      description: "Match to a coach suited to your coaching needs.",
    },
    {
      img: images.CAREER_ICON,
      title: "Meat",
      description: "Meat with your coach for as many as you want.",
    },
    {
      img: images.EXEC_ICON,
      title: "Grow",
      description: "Grow to acheive your goals as maximize your potential.",
    },
  ];
  return (
    <div>
      <JourneyWrapper>
        {data.map((item, key) => (
          <div key={key}>
            <JourneyIcon src={item.img}></JourneyIcon>
            <JourneyTitle>{item.title}</JourneyTitle>
            <JourneyDescription>{item.description}</JourneyDescription>
          </div>
        ))}
      </JourneyWrapper>
    </div>
  );
}

export default Journey;
