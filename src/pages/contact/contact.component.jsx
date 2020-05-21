import React from "react";

import { ReactComponent as Headoffice } from "../../assets/building.svg";
import {
  ContactPageContainer,
  HeadofficeSection,
  HeadImageContainer,
  HeadTextContainer,
  ContactUs,
  Heading,
} from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <ContactUs className="animate__animated animate__rubberBand">
      CONTACT US
    </ContactUs>
    <Heading className="animate__animated animate__flipInX">HEAD OFFICE</Heading>
    <HeadofficeSection>
      <HeadImageContainer className="animate__animated animate__fadeInLeft">
        <Headoffice />
      </HeadImageContainer>

      <HeadTextContainer className="animate__animated animate__fadeInRight">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable.
      </HeadTextContainer>
    </HeadofficeSection>
    <HeadofficeSection>
      <HeadTextContainer data-aos="fade-right">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable.
      </HeadTextContainer>
      <HeadImageContainer data-aos="fade-left">
        <Headoffice />
      </HeadImageContainer>
    </HeadofficeSection>
  </ContactPageContainer>
);

export default ContactPage;
