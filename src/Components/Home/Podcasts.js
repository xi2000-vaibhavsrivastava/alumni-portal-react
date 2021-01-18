import React, { Component } from 'react'
import Parser from 'rss-parser'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Podcast extends Component {
  state = {
    podcasts: [],
    imgUrl: ''
  }
  componentDidMount(){
    let parser = new Parser();
    const RSS_URL = `https://anchor.fm/s/2674fec0/podcast/rss`;
    parser.parseURL(RSS_URL)
      .then(data => {
        this.setState({ podcasts: data.items, imgUrl: data.image.url });
      })
  }
  render() {
    const {podcasts, imgUrl} = this.state;
    return (
      <div className="bg-white" id="podcastsId">
      {podcasts.length === 0 ? <p>Loading...</p> : 
        <OwlCarousel 
          className="owl-theme"
          loop={true}
          nav={true}
          dots={false}
          items={1}
          autoplay={true}
          autoplayHoverPause={true}
          autoplayTimeout={4000}
          animateOut={"fadeOut"} >
          {this.state.podcasts.map((podcast, index) => ( 
            <div className="podcast-header" style={{background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(255,255,255,0) 75%), url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}} key={index}>
              <div className="podcast-content p-3 item">
                <span className="bg-badge px-4 py-1 blog-badge rounded">Podcasts</span>
                <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="text-white">
                  <h4 className="mt-3 mb-3 py-1 h5">{podcast.title}</h4>
                </a>
                <div className="pb-2">
                  <i className="far fa-clock text-color-dark-150"></i>
                  <span className="author text-color-dark-150 pl-2 pr-4">{Math.floor(parseInt(podcast.itunes.duration)/60)} mins</span>
                  <i className="far fa-calendar-alt text-color-dark-150"></i>
                <span className="author text-color-dark-150 pl-2 pr-4">{new Date(podcast.pubDate).toLocaleString("en-us", {month: "long", day: "2-digit", year: "numeric"})}</span>
                </div>
              </div>
            </div>
            ))}
          </OwlCarousel>}
      </div>
    )
  }
}

export default Podcast