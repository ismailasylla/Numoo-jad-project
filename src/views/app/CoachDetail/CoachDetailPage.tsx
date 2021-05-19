import React from 'react';
import { Container, CoacheDetailWrapper, CoacheDetailBoxLeft, CoacheDetailBoxRight } from './CoachDetailPage.styled';
import { SubHeading, CoachDetail, CoachShortProfile, CoachStatistics } from 'components';
import data from '../../../dummy/coaches';

function CoachDetailPage({ props }: any): JSX.Element {
  return (
    <Container>
      <SubHeading
        title={"Coach Details"}
      />
        
      <CoacheDetailWrapper>
        <CoacheDetailBoxLeft>
          
        <CoachShortProfile
          pic={data[0].img}
          name={data[0].name}
          about={data[0].short}
          location={data[0].location}
          categories={data[0].categories}
          languages={data[0].languages}
        />

        <CoachStatistics
          numooHours={data[0].numooHours}
          experience={data[0].experience}
          rating={data[0].rating}
          tags={data[0].tags}
        />

        </CoacheDetailBoxLeft>
        <CoacheDetailBoxRight>
          <CoachDetail />
        </CoacheDetailBoxRight>
      </CoacheDetailWrapper>
      
    </Container>
  )
}

export default CoachDetailPage;