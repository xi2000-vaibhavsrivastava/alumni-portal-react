import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { eventList } from "../../data/data";

function UpcomingEvents() {
  return (
    <div className="bg-gems bg-purple-900 text-white p-3 rounded">
      <h2 className="text-white text-center h6 mb-4 mt-3">Exclusive Up-Coming Events for Ex-Xebians</h2>
      <OwlCarousel 
        className="owl-theme"
        loop={true}
        dots={false}
        items={1}
        autoplay={true}
        autoplayHoverPause={true}
        autoplayTimeout={4000}
        animateOut={"fadeOut"} >
          {eventList.map(gem => (
            <div className="upcoming-events item" key={gem.emp_code}>
              <div className="gem-img-holder mx-auto" style={{backgroundImage: `url(${gem.image.default})`}}></div>
              <p className="text-center font-secondary font-weight-bold pt-3 mb-0">{gem.name}</p>
            </div>
          ))}
      </OwlCarousel>
    </div>
  )
}

export default UpcomingEvents