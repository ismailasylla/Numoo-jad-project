import React from 'react';
import { Container, Content, TitleBg, TitleSm, Circle, CircleBig } from './Header.styled';

function Header() {
  return (
    <Container>
      <Content>
        <TitleBg>Find the right business or life coach for you</TitleBg>
        <TitleSm>All coaches are verified professionals.</TitleSm>
        <Circle />
        <CircleBig />
      </Content>
    </Container>
  )
}

export default Header;