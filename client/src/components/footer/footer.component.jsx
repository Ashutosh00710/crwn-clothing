import React from "react";

import { ReactComponent as Facebook } from "../../assets/facebook.svg.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as YouTube } from "../../assets/youtube.svg";
import {
  FooterContainer,
  CopyrightSection,
  SocialmediaSection,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <CopyrightSection>&copy; Crown Clothing Private Limited</CopyrightSection>
    <SocialmediaSection>
      <Facebook />
      <Instagram />
      <Twitter />
      <YouTube />
    </SocialmediaSection>
  </FooterContainer>
);

export default Footer;
