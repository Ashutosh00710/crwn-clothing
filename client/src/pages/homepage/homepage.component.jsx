import React from "react";
import Directory from "../../components/directory/directory.component";
import Cover from "../../components/cover/cover.component";
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => (
  <HomePageContainer>
    <Cover />
    <Directory />
  </HomePageContainer>
);

export default Homepage;
