import React from "react";
import "./Card.css";



function Card() {
  return (
    <>
    <div className="Bg-Img">
      <img src="https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="me"/>
    <div className="card">
      <div className="Header">
      <h2>Google Developers Club-UCU</h2>
      </div>
      <div className="Para">
      <p>
      Google Developers-UCU is a team that works to build and support a vibrant community of developers and technology enthusiasts. The team provides resources, tools, and support for developers across various platforms.
      </p>
      </div>
      </div>
      </div>
    </>
  );
}

export default Card;
