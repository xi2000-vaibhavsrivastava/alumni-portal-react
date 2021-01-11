import image1 from '../../images/events/1.jpg';
import { eventList } from "../../data/data";
const Events = () => {
    return(
        <section className="py-4 pt-lg-5 pb-6 bg-light" id="events">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="mb-5 font-weight-bold text-transform-none">Upcoming Events At Xebia</h2>
            </div>
          </div>
          <div className="row">
          {
              eventList.map((list,key) => {
                return(
                  <div className="col-md-6 col-lg-3 h-100 mb-4">
                  <img className="img-fluid rounded-top" src={list.image.default} alt="" />
                  <a href={list.link} target="_blank">
                  <div className="p-3 rounded-bottom text-center">
                    <h5 className="mb-1 text-base text-transform-none font-weight-medium">{list.name}</h5>
                    {/* <p className="text-left mt-3">At eripuit signiferumque sea, vel ad mucius molestie, cu labitur. At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
                    <a className="text-dark font-weight-semi-bold" href="#">Read more<svg className="svg-inline--fa fa-angle-right fa-w-8 ml-1 text-900" data-fa-transform="down-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg style={{transformOrigin: '0.25em 0.625em'}}><g transform="translate(128 256)"><g transform="translate(0, 64)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="translate(-128 -256)" /></g></g></svg></a> */}
                  </div>
                  </a>
                </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
}

export default Events;