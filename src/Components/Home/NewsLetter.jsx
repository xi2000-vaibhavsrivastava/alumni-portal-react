import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NewsletterInfo from '../utils/NewsLetterInfo';

function NewsLetter() {
  return (
    <div className="bg-white" id="newslettersId">
      {NewsletterInfo.length === 0 ? <p>Loading...</p> : 
      <OwlCarousel 
        className="owl-theme"
        loop={true}
        dots={false}
        items={1}
        nav={true}
        autoplay={true}
        autoplayHoverPause={true}
        autoplayTimeout={4000}>
        {NewsletterInfo.map((newsletter, index) => ( 
          <div key={index} className="newsletter-header item"
            style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 50%, rgba(255,255,255,0) 75%), url(${newsletter.poster})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}}>
            <div className="newsletter-content p-3" style={{height:`110%`}}>
              <span className="bg-purple-600 px-3 py-1 newsletter-badge rounded">Newsletters</span>
              <a href={newsletter.url} target="_blank" rel="noopener noreferrer" className="text-white">
                <h4 className="mt-2 mb-3 py-1 text-white h5">{newsletter.title}</h4>
              </a>
              <div className="pb-2">
                <i className="far fa-calendar-alt text-white-700"></i>
                <span className="date text-white-700 pl-2 pr-4">{newsletter.date.toLocaleString("en-us", {month: "long", day: "2-digit", year: "numeric"})}</span>
              </div>
            </div>
          </div>
          ))}
      </OwlCarousel>}
    </div>
  )
}

export default NewsLetter