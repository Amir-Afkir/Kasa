import React from "react";
import "./Host.scss";

function Host({ host }) {
  return (
    <div className="host">
      <span>{host.name}</span>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}

export default Host;
