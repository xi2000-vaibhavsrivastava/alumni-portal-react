import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { glimpsesImage, latestNews } from "../../data/data";
const Network = () => {
  return (
    <section className="py-5"  id="network">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mb-5 font-weight-bold text-transform-none text-center" data-zanim-xs="{'duration':'1.5','delay':0.1}" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Glimpses</h2>
            <OwlCarousel className="owl-theme owl-carousel-theme owl-carousel-synced"
              loop={true}
              autoplay={100}
              margin={10}
              items={1}
              dots={false}
            >
              {
                glimpsesImage.map((list, key) => {
                  return (
                    <div className="item px-2">
                      <div className="car mb-4 px-4 px-md-0">
                        <div className="cards" style={{ borderTop: 'none!important', boxShadow: 'none' }}>
                          <img className="card-img img-fluid" src={list.image.default} alt="Card image" />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </OwlCarousel>
          </div>
          <div className="col-md-4">
            <h2 className="mb-5 font-weight-bold text-transform-none text-center" data-zanim-xs="{'duration':'1.5','delay':0.1}" style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>Trending in Xebia</h2>
            <div className="news-item">
              <OwlCarousel
                loop={true}
                items={1}
                autoplay={300}
              >
                {
                  latestNews.map((list, key) => {
                    return (
                      <div className="item">
                        <a href={list.link} target="_blank">
                          <h3 className="latest-news-heading">{list.name}</h3>
                          <div className="events-image"><img  className="img-fluid rounded-top mb-2" src={list.image.default} /></div>
                          <p className="">{list.description}</p>
                        </a>
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
export default Network;