import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import ContactWithTeam from "./ContactWithTeam";
import SingleTeamBanner from "./SingleTeamBanner";
import TeamDetailsAbout from "./TeamDetailsAbout";
import TeamDetailsHero from "./TeamDetailsHero";

const TeamDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <SingleTeamBanner />
      <TeamDetailsHero />
      <TeamDetailsAbout />
      <ContactWithTeam />
      <FooterThree />
    </>
  );
};

export default TeamDetails;
