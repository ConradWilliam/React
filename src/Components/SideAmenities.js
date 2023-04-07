import React from "react";
import "./SideAmenities.css";
/**
 * import useRouter from react-router-dom
 * desctracture router from useRouter
 * const router = useRouter()
 * onClick(()=>router.push(feedbackData[activeIndex].imageUrl))
 *
 */

export default function SideAmenities() {
  return (
    <div className="about">
      <h1>Club Background</h1>
 
      <p>
        This is a community of passionate coders who are dedicated to improving
        their skills and making great software. We're excited to have you on
        board! As a member of the Developer Club, you'll have access to a
        variety of resources that can help you grow as a developer. From online
        courses and tutorials to group projects and hackathons, we offer a range
        of opportunities for you to learn and connect with other like-minded
        individuals. Whether you're a beginner or an experienced developer,
        there's something for everyone in our club. You can take part in our
        weekly coding challenges, join study groups to work on new skills, or
        attend talks and workshops from industry experts. We believe that the
        best way to learn is by doing, so we encourage our members to get
        involved and start building things. Whether you're interested in web
        development, mobile apps, or machine learning, we're here to support you
        every step of the way. So what are you waiting for? Join us today and
        start building the future!
      </p>
      <div className="Division">
        <div className="Image-Section">
          <div className="image1">
            <img src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p>Conferences</p>
          </div>
          <div className="image2">
            <img src="https://images.pexels.com/photos/1181609/pexels-photo-1181609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p>Meet ups</p>
          </div>
          <div className="image5">
            <img src="https://images.pexels.com/photos/3775620/pexels-photo-3775620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p>Gadgets</p>
          </div>
          <div className="image6">
            <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p>Fundraisings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
