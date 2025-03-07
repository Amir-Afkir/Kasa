import React from "react";
import Banner from "../components/About/Banner/Banner-about";
import Faq from "../components/About/Faq/Faq";
import "./About.scss";

function About() {
  return (
    <div className="About-container">
      <Banner image="/images/about-banner.jpg" />
      <Faq />
    </div>
  );
}

export default About;
