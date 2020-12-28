import Tanmay from '../../images/alumni/tanmay_mehra.jpg';
import Nikhil from '../../images/alumni/nikhil_khullar.JPG';
import alumni_3 from '../../images/alumni/3.jpg';
const Alumni = () => {
    return(
        <section className="py-4 pt-lg-5 pb-6" id="alumni">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="mb-5 font-weight-bold text-transform-none">Our Alumni Journeys</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 h-100 mb-4">
              <img className="img-fluid rounded-top" src={Tanmay} alt="" />
              <div className="p-3 rounded-bottom text-center">
                <h5 className="mb-1 text-base text-transform-none font-weight-medium">Tanmay Mehra</h5>
                <p className="mb-2 font-weight-medium">Sales Executive, Info.INC</p>
                <p className="text-left mt-3">It sounds like a paradox. Contradictio in terminis, as the linguistic in me likes to put it. Staying connected in times of isolation. Now that most of us are working<br /><br /></p>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 h-100 mb-4">
              <img className="img-fluid rounded-top" src={Nikhil} alt="" />
              <div className="p-3 rounded-bottom text-center">
                <h5 className="mb-1 text-base text-transform-none font-weight-medium">Nikhil Khullar</h5>
                <p className="mb-2 font-weight-medium">Chief of Engineering, ZXC</p>
                <p className="text-left mt-3">There is a lot of buzz around the practice of Progressive Delivery lately. Rightfully so, as it’s a great addition to continuous delivery.By gradually exposing new versions to a subset of users.</p>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 h-100 mb-4">
              <img className="img-fluid rounded-top" src={alumni_3} alt="" />
              <div className="p-3 rounded-bottom text-center">
                <h5 className="mb-1 text-base text-transform-none font-weight-medium">Peter Washington</h5>
                <p className="mb-2 font-weight-medium">Head of International Sales, ABC</p>
                <p className="text-left mt-3">A real team is more than just a collection of individuals . It provides members of that team with a common purpose, identity and a safe-to-fail environment where people can thrive together.</p>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                  <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Alumni;