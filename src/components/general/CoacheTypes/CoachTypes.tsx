import React from 'react';
import { Container, Content, Type, TitleBg } from './CoachTypes.styled';

function CoachTypes() {
  const data = ['Career coaching', 'Confidence', 'Creative coaching', 'Family', 'Finances', 'Health coaching', 'Relationships', 'Spirituality', 'Retirement'];
  return (
    <Container>
      <Content>
        <TitleBg>Some of available skills</TitleBg>
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