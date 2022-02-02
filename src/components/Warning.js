import React from "react";

import "../styles/Warning.css";

function Warning() {
  return (
    <div className="Warning">
      <h2> No location found </h2>
      <p>Try informing city/town and state/country</p>
      <p> Ex: Jurupa Valley, Riverside</p>
      <p> Ex: California, United Sates </p>
    </div>
  );
}

export default Warning;
