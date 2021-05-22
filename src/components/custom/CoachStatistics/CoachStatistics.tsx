import React from 'react';
import { StatisticTypeContainer, CenteredContainer, Tags, Tag, StatisticType } from './CoachStatistics.styled';
import { LabelHeading } from 'components';

interface Props {
  numooHours: string;
  experience: string;
  rating: number;
  tags: Array<string>;
}

function CoachStatistics({ numooHours, experience, rating, tags }: Props) {
  return (
    <div>
      <CenteredContainer>
        <LabelHeading isGreyed="true" center="true" title={numooHours} />
        <LabelHeading isGreyed="true" center="true" title={experience} />
        <LabelHeading isGreyed="true" center="true" title={experience} />
      </CenteredContainer>

      <StatisticTypeContainer>
        <StatisticType>in numoo</StatisticType>
        <StatisticType>of experience</StatisticType>
        <StatisticType>{rating} rating</StatisticType>
      </StatisticTypeContainer>

      <Tags>
        {tags.map((item, key) =>
          <Tag
            key={key}
          >{item}</Tag>
        )}
      </Tags>
    </div>
  )
}

export default CoachStatistics;