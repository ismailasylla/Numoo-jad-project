import React from 'react';
import { Container, Content, TitleBg, TitleSm, TitleSmWrapper, BtnWrapper } from './Header.styled';
import { ButtonNav } from 'components';
import { IntlMessage } from "utils";

function Header() {
  return (
    <Container>
      <Content>
        <TitleBg>Find the right</TitleBg>
        <TitleBg>life coach</TitleBg>
        <TitleBg>for you.</TitleBg>
        <TitleSmWrapper>
          <TitleSm>All coaches are</TitleSm>
          <TitleSm>verified professionals.</TitleSm>
        </TitleSmWrapper>
        <BtnWrapper>
          <ButtonNav
            to='/app/coaches'
            label='Find a coach'
            isOrange="true"
            mright='10px'
          />
          <ButtonNav
            to='/app/coaches'
            label="Let's talk"
          />
        </BtnWrapper>
      </Content>
    </Container>
  )
}

export default Header;