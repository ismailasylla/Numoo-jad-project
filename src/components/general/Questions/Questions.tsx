import React from 'react';
import { Container, Content, BoxWrapper, Box, ArrowButton } from './Questions.styled';
import { MainHeading, SubHeading, DescriptionHeading, ButtonText } from '../../../components';

function Questions() {
  const data = [
    {question: 'Life Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {question: 'Career Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {question: 'Executive Coaching', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'}
  ];

  return (
    <Container>
      <Content>
        <MainHeading title={"Is Coaching Right for you?"} />
        <BoxWrapper>
          {data.map((item, key) =>
            <Box key={key}>
              <SubHeading title={item.question} />
              <DescriptionHeading title={item.description} />
              <ArrowButton to='/user/signup'>Read more</ArrowButton>
            </Box>
          )}
        </BoxWrapper>
      </Content>
    </Container>
  )
}

export default Questions;