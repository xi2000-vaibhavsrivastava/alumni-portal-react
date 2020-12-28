import xebia_logo from '../../images/xebia_logo.png';
const Subfooter = () => {
    return(
        <section className="bg-1100 py-6 px-3 px-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pr-lg-4 mb-4 mb-lg-0">
              <h5 className="text-white mb-3 mt-1"><img src={xebia_logo} height="30px" alt="" /></h5>
              <p className="text-700">Xebia IT Architects explores and creates' new frontiers in IT. We provide innovative services and strive to guide our customers into the transforming world of technology.</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-6 col-md-4 pl-lg-4 mb-4 mb-lg-0">
                  <h5 className="text-white mb-3">Menu Heading</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 1</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 2</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 3</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 4</a></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 pl-4 mb-4 mb-lg-0">
                  <h5 className="text-white mb-3">Menu Heading</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 1</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 2</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 3</a></li>
                    <li className="mb-2"><a className="text-700 hover-color-white" href="#"><span className="fas fa-caret-right mr-2" />Item Link 4</a></li>
                  </ul>
                </div>
                <div className="col-md-4 pl-md-4">
                  <h5 className="text-white mb-3">CORPORATE OFFICE</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><span className="fas fa-map-marker-alt mr-2" /><a className="text-700 hover-color-white" href="https://www.google.com/maps/place/1+Baltimore+Pl+NW+G100,+Atlanta,+GA+30308,+USA/@33.7686391,-84.3906015,17z/data=!3m1!4b1!4m18!1m12!4m11!1m3!2m2!1d-84.3883763!2d33.7686134!1m6!1m2!1s0x88f5047b20ba543f:0x2fa7599103c93fd2!2s1+Baltimore+Pl+NW+G100,+Atlanta,+GA+30308,+USA!2m2!1d-84.3884128!2d33.7686347!3m4!1s0x88f5047b20ba543f:0x2fa7599103c93fd2!8m2!3d33.7686347!4d-84.3884128">1 Baltimore Place NW, Suite G100, Atlanta, GA - 30308</a>
                    </li>
                    <li className="mb-2"><span className="fas fa-envelope mr-2" /><a className="text-700 hover-color-white" href="mailto:info@xebia.com">info@xebia.com</a></li>
                    <li className="mb-2"><span className="fas fa-phone mr-2" /><a className="text-700 hover-color-white" href="tel:+1 (404) 343-4832">+1 (404) 343-4832</a></li>
                    <li className="my-3"><a className="btn btn-sm btn-light hvr-sweep-top" href="./contact-us.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Subfooter;