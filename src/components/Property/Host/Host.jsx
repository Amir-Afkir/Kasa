import React from "react";
import "./Host.scss";

function Host({ host }) {
  return (
    <div className="host">
      <span>
        {host.name.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br /> {/* Saut de ligne */}
          </React.Fragment>
        ))}
      </span>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
