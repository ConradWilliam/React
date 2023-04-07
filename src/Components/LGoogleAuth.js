import React from "react";
import "./LCard.css";

function LGoogleAuth({ googleLabel, facebookLabel }) {
  // const { googleLabel, facebookLabel } = props;
  return (
    <div className="button-container">
      <button className="Google">
        <div className="icon1">
          <i class="fa-brands fa-google"></i>
        </div>
        {googleLabel}
      </button>

      <button className="Fb">
        <div className="icon">
          <i class="fa-brands fa-facebook"></i>
        </div>
        {facebookLabel}
      </button>
    </div>
  );
}

export default LGoogleAuth;
