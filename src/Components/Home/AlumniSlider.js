import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from '../../images/testimonial/1.jpg';
import image2 from '../../images/testimonial/2.jpg';
import image3 from '../../images/testimonial/3.jpg';

const Alumnislider = () => {
  return (
    <section className="testimonial py-5 bg-light">
      {/* <div class="bg-holder overlay overlay-0" style="background-image:url(./assets/img/testimonial/bg.jpg);"></div> */}
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mb-4 text-center">
            <h2 className="font-weight-bold text-transform-none"  data-zanim-xs='{"duration":1.5,"delay":0}'>Our Alumni Journeys</h2>
          </div>
          <div className="col-sm-10 col-lg-8 text-center text-md-left px-sm-0">
            <div className="border rounded px-3 px-sm-4 px-md-6 py-5 mt-5">
              <div className="testimonial-quote"></div>
              <div className="rounded-circle testimonial-avatar"></div>
              <OwlCarousel className="owl-theme owl-carousel-theme owl-carousel-synced"
                loop = {true}
                autoPlay={true}
                margin={10}
                nav
                items={1}
              >
                <div className="item px-2" data-avatar={image1}>
                  <p className="text-base mt-4 mt-md-0" style={{ fontSize: '16px' }}> Reign superbly blends all the best elements. It offers the power of bootstrap with useful blocks and extensions. It also includes the most elegant typographic features and unique sections which makes our developers incredibly happy.</p>
                  <div className="row no-gutters justify-content-between align-items-end">
                    <div className="col-12 col-md mb-3 mb-md-0">
                      <h4 className="font-weight-normal mb-0 fs-1 ls-0">Peter Gregory</h4>
                      <p className="fs--1 text-uppercase text-500 mb-0 ls-1">CEO &amp; Founder</p>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-right">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item px-2" data-avatar={image2}>
                  <p className="text-base mt-4 mt-md-0" style={{ fontSize: '16px' }}>Reign template is an indispensable collection of powerful tools to do just that. I’m a long-time customer of Reign template and highly recommend it to anyone who is serious about to grow his/her company through web all over the world.</p>
                  <div className="row no-gutters justify-content-between align-items-end">
                    <div className="col-12 col-md mb-3 mb-md-0">
                      <h4 className="font-weight-normal mb-0 fs-1 ls-0">Lily Rose</h4>
                      <p className="fs--1 text-uppercase text-500 mb-0 ls-1">Customer Support</p>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-right">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item px-2" data-avatar={image3}>
                  <p className="text-base mt-4 mt-md-0" style={{ fontSize: '16px' }}>The team behind Reign sure know what they are doing and their responsibility! If you’re looking for managed hosting, you’ll find a stable, secure and so well optimized option in Reign sites and all other products price range.</p>
                  <div className="row no-gutters justify-content-between align-items-end">
                    <div className="col-12 col-md mb-3 mb-md-0">
                      <h4 className="font-weight-normal mb-0 fs-1 ls-0">Richard Mark</h4>
                      <p className="fs--1 text-uppercase text-500 mb-0 ls-1">Marketing Manager</p>
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-right">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alumnislider;