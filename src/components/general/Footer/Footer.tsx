import React from "react";
import { Container, FooterWrapper, Column, Link, Logo, Right } from "./Footer.styled";
import { images } from "../../../constants";
import { IntlMessage } from "utils";
import { LangSwitch } from 'components';

function Footer(): JSX.Element {
  return (
    <Container>
      <FooterWrapper>
        <Column>
        <Link target="_blank" href="">
          <Logo src={images.LOGO_WHITE} alt="" />
        </Link>
        </Column>
        <Column>
          <Link target="_blank" href=""><IntlMessage id="footer.link.contact" /></Link>
          <Link target="_blank" href=""><IntlMessage id="footer.link.about" /></Link>
          <Link target="_blank" href=""><IntlMessage id="footer.link.legal" /></Link>

          <LangSwitch />

        </Column>
        <Column>
          <Right>
            ©2021 <IntlMessage id="footer.rights" /> 
          </Right>
        </Column>
      </FooterWrapper>
    </Container>
  )
}

export default Footer;