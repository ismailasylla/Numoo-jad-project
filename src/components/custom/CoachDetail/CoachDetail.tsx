import React from 'react';
import { Container, Footer, Tag, SkillsTitle } from './CoachDetail.styled';
import { CoachShortProfile } from 'components';

function CoachDetail() {
  return (
    <Container>
      

      <div style={{padding: '20px 20px', color: '#AAA'}}>
        <p>Some long description about the coach, Some long description about the coach, Some long description about the coach, Some long description about the coach, 
        Some long description about the coach, Some long description about the coach, Some long description about the coach
        </p>
      </div>

      <div style={{borderTop: '2px solid #EEE', padding: '20px 20px'}}>
        <h2>$50.00 /hr</h2>
      </div>

      <div style={{borderTop: '2px solid #EEE', padding: '0px 20px', paddingTop: '20px'}}>
        <SkillsTitle>Skills</SkillsTitle>
        <Footer>
          <Tag>CSS</Tag>
          <Tag>HTML</Tag>
          <Tag>Paint</Tag>
          <Tag>Gym</Tag>
        </Footer>
      </div>

    </Container>
  )
}

export default CoachDetail;