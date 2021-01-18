  
import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Blogs extends Component {
  state = {
    blogs: [],
    feed : {},
    isLoading: true
  }

  componentDidMount(){
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fxebia-engineering"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ blogs: data.items, feed: data.feed, isLoading: false });
      })
  }

  render() {
    return (
      <div className="bg-white" id="blogsId">
      {this.state.blogs.length === 0 ? <p>Loading...</p> : 
      <OwlCarousel 
        className="owl-theme"
        nav={true}
        loop={true}
        dots={false}
        items={1}
        autoplay={true}
        autoplayHoverPause={true}
        autoplayTimeout={4000}
        animateOut={"fadeOut"} >
        {this.state.blogs.map((blog, index) => ( 
          <div
            key={index}
            className="blog-header item"
            style={{background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(255,255,255,0) 75%), url(${blog.thumbnail})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}>
            <div className="blog-content p-3">
              <span className="bg-badge px-3 py-1 blog-badge rounded">Blogs</span>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <h4 className="mt-2 mb-3 py-1 text-white">{blog.title}</h4>
              </a>
              <div className="pb-2">
                <i className="far fa-calendar-alt text-color-dark-150"></i>
                <span className="author text-color-dark-150 pl-2 pr-4">{new Date(blog.pubDate).toLocaleString("en-us", {month: "long", day: "2-digit", year: "numeric"})}</span>
                <i className="far fa-user text-color-dark-150"></i>
                <span className="author text-color-dark-150 pl-2">{blog.author}</span>
              </div>
            </div>
          </div>
           ))}
        </OwlCarousel>}
      </div>
    )
  }
}

export default Blogs