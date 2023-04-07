import React from 'react';        
import './SideAmenities.css';
/** 
 * import useRouter from react-router-dom
 * desctracture router from useRouter
 * const router = useRouter()
 * onClick(()=>router.push(feedbackData[activeIndex].imageUrl))
 * 
 */

export default function SideAmenities(){
    return(
        <div className='about'>
            <h1>Flourishing Amenities</h1>
            <p>We Elevate guest experience by incorporating thoughtful design & Living brands 
                into our apartments.
            </p>
            <div className='Division' >
                <div className='Image-Section' >
                    <div className='image1'>
                        <img src='https://images.pexels.com/photos/14941996/pexels-photo-14941996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Bluetooth Speakers</p>
                    </div>
                    <div className='image2'>
                        <img src='https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Functional Furnishings</p>
                    </div>                    
                       <div className='image5'>
                        <img src='https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>TV with cable</p>
                    </div>
                    <div className='image6'>
                        <img src='https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                        <p>Towels</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
