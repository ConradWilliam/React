import React from "react";
import "./Location.css";

function Location(){
    return(
        <>
        <div className="location-container">
            <h2>Which country is your property located in?</h2>
            <p>Maximize your rental income with Blueground! We partner with property owners; transform their empty units into fully furnished, turnkey apartments; and then rent them out using our vetted, high-quality tenant network. Learn how you can partner with us by selecting the city you'd like to rent your property in.</p>
            <div className="country-tags">
                <ul>
                    <li><a href="#"><i className="flag-icon flag-icon-ug"></i> Uganda</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-at"></i> Austria</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-gr"></i> Greece</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-es"></i> Spain</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-ae"></i> UAE</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-dk"></i> Denmark</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-hk"></i> Hong Kong</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-ch"></i> Switzerland</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-gb"></i> UK</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-fr"></i> France</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-cn"></i> China</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-lu"></i> Luxembourg</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-us"></i> USA</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-de"></i> Germany</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-pt"></i> Portugal</a></li>
                    <li><a href="#"><i className="flag-icon flag-icon-tr"></i> Turkey</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Location;
