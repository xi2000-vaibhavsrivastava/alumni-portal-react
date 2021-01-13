import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { glimpsesImage, latestNews } from "../../data/data";
const LatestEvents = () => {
  return (
    <section className="py-5"  id="latestEvents">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-5 font-weight-bold text-transform-none text-center" data-zanim-xs="{'duration':'1.5','delay':0.1}" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Trending in Xebia</h2>
            <div className="news-item">
              <OwlCarousel
                items={1}
                autoplay={false}
                nav = {true}
                video={true}
                loop={true}
              >
                {
                  latestNews.map((list, key) => {
                    return (
                      <div className="item">
                            <a className="owl-video" href={list.link}></a>
                            <h3 className="latest-news-heading text-center mt-2">{list.name}</h3>
                            {/* <p className="">{list.description}</p> */}
                      </div>
                    )
                  })
                }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LatestEvents;