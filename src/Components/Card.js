import React from "react";
import "./Card.css";



function Card() {
  return (
    <>
    <div className="Bg-Img">
      <img src="https://images.adsttc.com/media/images/5a7a/5a00/f197/cc81/4500/0154/slideshow/FACHADA_AMATEPEC_PM-005-Editar.jpg?1517967853" alt="me"/>
    <div className="card">
      <div className="Header">
      <h2>Feel at home,</h2>
      <h2>free to roam</h2>
      </div>
      <div className="Para">
      <p>
        Experience the home that moves with you for a month, a year, or longer
        with a global network of designer, furnished apartments.
      </p>
      </div>

                  <div class="dropdown">
                  <button className="dropbtn">
  <div className="Choose">Choose City</div>
  <i class="fa-sharp fa-solid fa-caret-down"></i>
                        </button>
              <div class="dropdown-content">
                <a href="/">Miami</a>
                <a href="/">Singapore</a>
                <a href="/">Lacanta</a>
              </div>
              </div>
      </div>
      </div>
    </>
  );
}

export default Card;
