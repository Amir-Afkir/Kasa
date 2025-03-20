import React, { useEffect } from "react";
import Banner from "../components/common/Banner/Banner.jsx";
import "./Home.scss";
import Card from "../components/Home/Card/Card";
import logements from "../data/logements.json"; 

function Home() {
    useEffect(() => {
        // Précharger l'image home-banner.webp
        const img = new Image();
        img.src = "/images/home-banner.webp";
    }, []);

    return (
      <div className="home-container">
        <Banner image="/images/home-banner.webp" text="Chez vous, partout et ailleurs" />
        <div className="Card-container">
          {logements.map((logement) => (
            <Card 
              key={logement.id} 
              id={logement.id}
              title={logement.title} 
              image={logement.cover} 
            />
          ))}
        </div>
      </div>
    );
}

export default Home;
