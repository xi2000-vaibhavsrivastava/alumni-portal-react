import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import xebia_logo from '../../images/xebia_logo.png';
const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-theme fixed-top p-0 d-none d-lg-block" style={{backdropFilter: 'saturate(180%) blur(20px)'}}>
          <div className="container px-3"><a className="navbar-brand font-weight-normal ls-1" href="./index.html"><img src={xebia_logo} height="28px" alt="" /> </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse pb-3 pb-md-0" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item py-3 py-md-0 dropdown dropdown-on-hover"><a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" href="#" aria-haspopup="true" aria-expanded="false"> <span className="nav-link-text">Menu</span></a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                    <a className="dropdown-item" href="#">Item 1</a>
                    <a className="dropdown-item" href="#">Item 2</a>
                    <a className="dropdown-item" href="#">Item 3</a>
                  </div>
                </li> */}
                {/* <li className="nav-item"><a className="nav-link pl-4" href="#">Menu Item 1</a></li>
                <li className="nav-item"><a className="nav-link pl-3" href="#">Menu Item 2</a></li> */}
                <li className="list-inline-item mr-0 nav-item"><a className="text-900 hover-color-white pr-2" target="_blank" href="https://www.linkedin.com/company/16903"><span className="fab fa-linkedin-in" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                <li className="list-inline-item mr-0"><a className="text-900 hover-color-white px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li>
                <li className="nav-item py-3 py-md-0 d-flex flex-column justify-content-center">
                  <a className="ml-0 ml-md-3 btn btn-sm btn-outline-light hvr-sweep-top" href="#join-us">Join Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-theme fixed-top p-0 d-lg-none" style={{backdropFilter: 'saturate(180%) blur(20px)'}}>
          <div className="container px-3"><a className="navbar-brand font-weight-normal ls-1" href="./index.html"><img src={xebia_logo} height="28px" alt="" /> </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse pb-3 pb-md-0" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item py-3 py-md-0 dropdown dropdown-on-hover"><a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" href="#" aria-haspopup="true" aria-expanded="false"> <span className="nav-link-text">Menu</span></a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">
                    <a className="dropdown-item" href="#">Item 1</a>
                    <a className="dropdown-item" href="#">Item 2</a>
                    <a className="dropdown-item" href="#">Item 3</a>
                  </div>
                </li>
                <div className="dropdown-menu dropdown-menu-right show mt-1" aria-labelledby="navbarDropdownMenuLink1">
                  <a className="dropdown-item" href="#">Menu Item 1</a>
                  <a className="dropdown-item" href="#">Menu Item 2</a>
                  <a className="dropdown-item" href="#">Menu Item 3</a>
                </div>
                <li className="nav-item my-3">
                  <a className="btn btn-sm btn-outline-light hvr-sweep-top" href="#">Join Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>);
}
export default Header;