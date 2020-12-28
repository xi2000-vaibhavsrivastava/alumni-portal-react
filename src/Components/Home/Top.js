import image_header from '../../images/header.jpg';
const Top = () => {
    return(
        <section className="py-0 text-center" id="top">
        <div className="bg-holder overlay overlay-3 overlay-z-index-1" style={{backgroundImage: `url(${image_header})`}} />
        <div className="header-overlay" />
        <div className="container">
          <div className="d-flex flex-center vh-100">
            <div className="header-text">
              <div className="overflow-hidden">
                <h1 className="display-3 font-weight-regular text-transform-none text-white fs-5 fs-md-8" data-zanim-xs="{&quot;duration&quot;:2,&quot;delay&quot;:0}">Welcome to Xebia's</h1>
                <h1 className="mt-3 display-3 font-weight-medium text-transform-none text-white fs-5 fs-md-7" data-zanim-xs="{&quot;duration&quot;:2,&quot;delay&quot;:0.1}">Alumni Network</h1>
              </div>
            </div>
          </div>
          <div className="header-indicator-down"><a className="indicator indicator-down opacity-75" href="#about-us" data-fancyscroll="data-fancyscroll" data-offset={64}><span className="indicator-arrow indicator-arrow-one" data-zanim-xs="{&quot;from&quot;:{&quot;opacity&quot;:0,&quot;y&quot;:30},&quot;to&quot;:{&quot;opacity&quot;:1,&quot;y&quot;:0},&quot;ease&quot;:&quot;Back.easeOut&quot;,&quot;duration&quot;:1,&quot;delay&quot;:1.5}" /></a></div>
        </div>
      </section>
    )
}

export default Top;