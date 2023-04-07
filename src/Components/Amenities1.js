import React from 'react';        
import './Amenities1.css';


export default function Amenities1(){
    return(
        <div className='amenities'>
            <h1>At-Home amenities</h1>
            <p>We Elevate guest experience by incorporating thoughtful design & Living brands 
                into our apartments.
            </p>
            <div className='container-wrapper' >
                <div className='container' >
                    <div className='image1'>
                        <img src='https://images.pexels.com/photos/14941996/pexels-photo-14941996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Bluetooth Speakers</p>
                    </div>
                    <div className='image2'>
                        <img src='https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Funtional Furnishings</p>
                    </div>
                    <div className='image3'>
                    <img src='https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Fully-stocked Kitchen</p>
                    </div>
                    <div className='image4'>
                    <img src='https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Premium bedding</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
