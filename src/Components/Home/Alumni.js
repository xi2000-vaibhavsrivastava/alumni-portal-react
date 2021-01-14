import { alumiList } from "../../data/data";
const Alumni = () => {
    return(
        <section className="py-4 pt-lg-5" id="alumni">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="mb-5 font-weight-bold text-transform-none">Meet Ex Xebians</h2>
            </div>
          </div>
          <div className="row">
            {
              alumiList.map((list,key) => {
                return(
                    <div className="col-md-6 col-lg-4 h-100 mb-4">
                    <div className="alumni-image">
                      <img className="img-fluid rounded-top" src={list.image.default} alt="" />
                    </div>
                    <div className="p-3 rounded-bottom text-center">
                      <h5 className="mb-1 text-base text-transform-none font-weight-medium">{list.name}</h5>
                      <p className="mb-2 font-weight-medium">{list.designation}</p>
                      {/* <p className="text-left mt-3">It sounds like a paradox. Contradictio in terminis, as the linguistic in me likes to put it. Staying connected in times of isolation. Now that most of us are working<br /><br /></p> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-0"><a className="text-900 pr-2" target="_blank" href={list.linkedin}><span className="fab fa-linkedin-in" /></a></li>
                        {/* <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://twitter.com/XebiaIndia"><span className="fab fa-twitter" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.facebook.com/XebiaGlobal/"><span className="fab fa-facebook-f" /></a></li>
                        <li className="list-inline-item mr-0"><a className="text-900 px-2" target="_blank" href="https://www.instagram.com/life_at_xebia/"><span className="fab fa-instagram" /></a></li> */}
                      </ul>
                    </div>
                </div>
                )
              })
            }
        </div>
        </div>
      </section>

    )
}

export default Alumni;