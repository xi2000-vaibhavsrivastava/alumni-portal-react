import image1  from '../../images/gallery/xebia1.jpg';
import image2  from '../../images/gallery/xebia2.webp';
import image3  from '../../images/gallery/xebia3.webp';
import image4  from '../../images/gallery/xebia4.webp';
import image5  from '../../images/gallery/xebia5.webp';
import image6  from '../../images/gallery/xebia6.jpg';
import image7  from '../../images/gallery/xebia7.jpg';
import image8  from '../../images/gallery/xebia8.jpg';
import image9  from '../../images/gallery/xebia9.webp';
const Network = () => {
    return(
        <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col" data-zanim-timeline="{}">
              <h2 className="mb-5 font-weight-bold text-transform-none text-center" data-zanim-xs="{'duration':'1.5','delay':0.1}" style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Glimpses</h2>
            </div>
          </div>
          <div className="row">
            <div className="card-columns mb-4 px-4 px-md-0">
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image1} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image2} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image3} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image4} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image5} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image6} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image7} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image8} alt="Card image" /></div>
              <div className="card" style={{borderTop: 'none!important', boxShadow: 'none'}}><img className="card-img img-fluid" src={image9} alt="Card image" /></div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Network;