import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { glimpsesImage, latestNews } from "../../data/data";
const Network = () => {
  return (
    <section className="py-5"  id="network">
      <div className="container">
        <div className="row">
          <div className="col">
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
        </div>
      </div>
    </section>
  )
}
export default Network;