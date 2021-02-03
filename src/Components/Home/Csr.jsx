import React from 'react'
import CsrInfo from '../utils/Csr';

function Csr() {
  return (
    <div className="bg-white py-3 h-100" id="csrNewsId" style={{backgroundImage: `url(https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-075-clean-mirror.png)`,backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}}>
      <h2 className="h5 py-2 px-3">CSR</h2>
      <hr className="mt-0 mb-4"/>
      <div>
        {CsrInfo.map((item, index) => (
          <div className="d-flex mt-3 px-3" key={item.poster}>
            <div className="img-wrapper">
              <img className="rounded" src={item.poster} style={{height: 52, width: 52}} alt="Csr"/>
            </div>
            <div className="info pl-3">
              <p className="info-date my-0">{item.pubdate}</p>
              <p 
                className=" info-title font-weight-bold text-dark font-openSans mb-2"
                data-toggle="modal" data-target={`#csr-news-${index}`}>{item.title}</p>
              <p className="text-dark font-weight-bold info-body">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      {CsrInfo.map((item, index) => (
        <div key={index} className="modal fade" id={`csr-news-${index}`} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content p-2 csr-modal">
              <div className="modal-header d-flex">
                <div className="modal-img-wrapper">
                  <img width="85" height="85" src={item.poster} alt="Csr"/>
                </div>
                <div className="pl-3">
                  <p className="modal-date my-0">{item.pubdate}</p>
                  <h5 className="modal-title" id={`csr-news-${index}-label`}>{item.title}</h5>
                </div>
                <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
              </div>
              <div className="modal-body ">{item.body}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Csr