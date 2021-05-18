import React from 'react';
import { Container, Content, Type, TitleBg } from './CoachTypes.styled';
import { SubHeading } from '../../../components';

function CoachTypes() {
  const data = ['Career coaching', 'Confidence', 'Creative coaching', 'Family', 'Finances', 'Health coaching', 'Relationships', 'Spirituality', 'Retirement'];
  return (
    <Container>
      <Content>
      <SubHeading
      title={"Skills to choose from"}
    />
        {data.map((item, key) => 
          <Type key={key}>
            {item}
          </Type>
        )}
      </Content>
    </Container>
  )
}

export default CoachTypes;