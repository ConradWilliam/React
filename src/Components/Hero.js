import React from "react";
import "./Hero.css";


function Hero() {
    return (
        <>
          <div className="Hero">
            <h2>Welcome to the future of living</h2>
            <p>Find the peace of mind, flexibility, and confidence to explore your latest adventure — a new work gig, a home in between leases, or travel fever — with the ease and comfort at HomeHaven</p>
            </div>
            
            <div className="row">
                <div>
                     <img className="first" src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="meme" style={{objectFit: "cover"}}/>
                </div>

                <div>
                    <div>
                    <img className="second" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="meme" style={{objectFit: "cover"}}/>

                    </div>
                    <div>
                    <img className="third" src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="meme" style={{objectFit: "cover"}}/>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Hero;
