import React from 'react';
import { Container, CoacheDetailWrapper, CoacheDetailBoxLeft, CoacheDetailBoxRight } from './CoachDetailPage.styled';
import { SubHeading, CoachDetail, CoachStatistics } from 'components';

function CoachDetailPage({ props }: any): JSX.Element {
  return (
    <Container>
      <SubHeading
        title={"Coach Details"}
      />
        
      <CoacheDetailWrapper>
        <CoacheDetailBoxLeft>
          
          <CoachStatistics/>

        </CoacheDetailBoxLeft>
        <CoacheDetailBoxRight>
          <CoachDetail />
        </CoacheDetailBoxRight>
      </CoacheDetailWrapper>
      
    </Container>
  )
}

export default CoachDetailPage;