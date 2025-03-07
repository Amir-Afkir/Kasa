import React from "react";
import Banner from "../components/Home/Banner/Banner";
import "./Home.scss";
import Gallery from "../components/Home/Gallery/Gallery";
import logements from "../data/logements.json"; 


function Home() {
  return (
    <div className="home-container">
      <Banner image="/images/home-banner.jpg" text="Chez vous, partout et ailleurs" />
      <div className="gallery-container">
        {logements.map((logement) => (
          <Gallery key={logement.id} title={logement.title} image={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
