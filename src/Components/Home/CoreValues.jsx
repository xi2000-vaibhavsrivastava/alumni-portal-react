import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CoreInfo from '../utils/Core';

function Core() {
  return (
    <div className="bg-white py-3 h-100" id="coreNewsId">
      <h2 className="h5 py-2 px-3">Core Values</h2>
      <hr className="my-0" />
      <OwlCarousel 
        className="owl-theme "
        loop={true}
        items={1}
        autoplay={true}
        autoplayHoverPause={true}
        autoplayTimeout={3000}
         >
        {CoreInfo.map((item, index) => (
          <div className="mt-4 px-3" key={item.poster}>
            <div className="img-wrapper" style={{margin:"0 0 10% 4%"}}>
              <img className="rounded" src={item.poster} alt="core"/>
            </div>
            <div className="info pl-3">
              <p className="info-date my-0">{item.pubdate}</p>
              <p className="info-title font-openSans mb-2">{item.title}</p>
              <p className="text-justify info-body">{item.body}</p>
            </div>
          </div>
        ))}
        </OwlCarousel>
    </div>
  )
}

export default Core