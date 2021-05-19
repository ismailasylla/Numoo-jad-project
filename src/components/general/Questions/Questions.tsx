import React from 'react';
import { Container, Content, BoxWrapper, Box, ArrowBtnWrapper, ArrowButton, Icon, HeaderWrapper, CircleLeft, CircleRight } from './Questions.styled';
import { MainHeading, SubHeading, DescriptionHeading } from '../../../components';
import { images } from '../../../constants';

function Questions() {
  const data = [
    {img: images.LIFE_ICON, question: 'Life Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {img: images.CAREER_ICON, question: 'Career Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {img: images.EXEC_ICON, question: 'Executive Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'}
  ];

  return (
    <Container>
      <Content>
      <HeaderWrapper>
      <MainHeading title={"Is Coaching Right for you?"} />

      </HeaderWrapper>
        <BoxWrapper>
        
          {data.map((item, key) =>
            <Box key={key}>
              <Icon src={item.img}></Icon>
              <SubHeading title={item.question} />
              <DescriptionHeading title={item.description} />
              <ArrowBtnWrapper>
                <ArrowButton to='/user/signup'>Read more</ArrowButton>
              </ArrowBtnWrapper>
            </Box>
          )}
          <CircleLeft></CircleLeft>
         <CircleRight></CircleRight>
        </BoxWrapper>
        
      </Content>
    </Container>
  )
}

export default Questions;