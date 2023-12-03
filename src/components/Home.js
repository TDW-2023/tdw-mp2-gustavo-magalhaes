import React from "react";
import { HomeContainer, BackgroundImage, UALogoImage, Author } from "./styles";
import { CenterLinks } from "./CenterLinks";
import Navbar from "./NavBar";

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage
        tabIndex="0"
        src={require("../assets/img/Self_portrait_with_Felt_Hat.jpg")}
        alt="Van Gogh's self portrait"
      />
      <Author>Gustavo Magalhães - 118278</Author>
      <CenterLinks />
      <Navbar />
      <UALogoImage
        src={require("../assets/img/logomarca_aveiro-removebg-preview.png")}
        alt="Aveiro's logo"
      />
    </HomeContainer>
  );
};

export default Home;
