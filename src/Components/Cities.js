/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { Tabs, Tab, } from '@mui/material';
import './Cities.css';
import images from "./ImageItems.js";


function Cities() {

    const [selectedTab, setSelectedTab] = useState(0);
    const regions = [

        [images[0], images[1], images[2], images[3],
        images[4], images[5], images[6], images[7],
        images[8], images[9],],

        [
            images[10], images[11], images[12], images[13], images[14], images[15],
            images[16], images[17], images[18], images[19],
            images[20],],

        [
            images[21],
        ],
        [images[22],
        images[23],
        ]
    ];

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
        <div className='Global-Footprint'>
            <h1>Global Footprint</h1>
            <br />
            <p>15 countries. 27 cities. More than 12,000 apartments, and counting</p>
            <br />
            {/* Region tab implementation: */}
            <div className='region-tab'>

                <Tabs
                    value={selectedTab} // set the initial selected tab index
                    onChange={(event, newValue) => {
                        setSelectedTab(newValue);
                    }}
                    indicatorColor="primary" // set the indicator color
                    textColor="primary" // set the text color
                >

                    <Tab label="North America" />

                    <Tab label="Europe" />

                    <Tab label="Middle East" />

                    <Tab label="Asia" />

                </Tabs>
                <br />
            </div>

            <div className='city-grid'>
                <div className='Img'>
                    {regions[selectedTab].map((image, index) => (
                        <div className='image-wrapper' key={index}>
                            <img src={image.url} alt={image.title} />
                            <div className='image-text'>
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />

        </div>
        </>
    );
};

export default Cities;

