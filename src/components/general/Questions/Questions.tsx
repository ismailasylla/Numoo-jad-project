import React from 'react';
import { 
  Container, TitleWrapper, TitleSm, TitleBg, 
  BoxWrapper, Box, Title, Description, More
} from './Questions.styled';

function Questions() {
  const data = [
    {question: 'Is coaching right for me?', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {question: 'Is coaching right for me?', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'},
    {question: 'Is coaching right for me?', description: 'Coaching is ideal if you’re feeling stuck and want to make a change. Offering accountability, coaching offers the support you need to take action.'}
  ];

  return (
    <Container>
      <TitleWrapper>
        <TitleSm>WHY USE NUMOO APP?</TitleSm>
        <TitleBg>What works for you, works for us</TitleBg>
      </TitleWrapper>
      <BoxWrapper>
        {data.map((item, key) =>
          <Box key={key}>
            <Title>{item.question}</Title>
            <Description>{item.description}</Description>
            <More>Read more</More>
          </Box>
        )}
      </BoxWrapper>
    </Container>
  )
}

export default Questions;