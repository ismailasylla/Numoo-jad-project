import React from 'react';
import { Container, Content, TitleBg, TitleSm, TitleSmWrapper, BtnWrapper } from './Header.styled';
import { ButtonNav } from 'components';
import { IntlMessage } from "utils";
import { Carousel } from 'antd';

function Header() {
  return (
    
        <Carousel autoplay={true}>
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
                  isorange="true"
                  mright='10px'
                />
                <ButtonNav
                  to='/app/coaches'
                  label="Let's talk"
                />
              </BtnWrapper>
              </Content>
            </Container>
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
                  isorange="true"
                  mright='10px'
                />
                <ButtonNav
                  to='/app/coaches'
                  label="Let's talk"
                />
              </BtnWrapper>
              </Content>
            </Container>
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
                  isorange="true"
                  mright='10px'
                />
                <ButtonNav
                  to='/app/coaches'
                  label="Let's talk"
                />
              </BtnWrapper>
              </Content>
            </Container>
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
                  isorange="true"
                  mright='10px'
                />
                <ButtonNav
                  to='/app/coaches'
                  label="Let's talk"
                />
              </BtnWrapper>
              </Content>
            </Container>
        </Carousel>
       
    
  )
}

export default Header;