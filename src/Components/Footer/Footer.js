import Xebia from '../../images/xebia.png';
const Footer = () => {
    return(
        <section className="text-center bg-black py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-auto mb-1 mb-md-0">
              <p className="mb-0">Xebia IT Architects. All rights reserved ©<span className="mx-2" /></p>
            </div>
            <div className="col-12 col-md-auto">
              <p className="mb-md-0 mb-2">Proudly Part of <a className="text-800 hover-color-white" target="_blank" href="https://xebia.com/">Xebia Group</a></p>
            </div>
            <div className="col-12 col-md-auto">
              <p className="mb-0"><img src={Xebia} height="42px" alt="Xebia" style={{borderRadius: '2px'}} /></p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer;