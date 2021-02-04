import about_us_img  from '../../images/img1.jpg'
const AboutUs = () => {
    return (
        <section className="py-4 py-lg-6" id="about-us">
        <div className="container mb-5">
          <div className="col">

              <p className="sliding-text">Welcome to Xebia's Alumni Community, Stay in touch with your Xebia Family.<br></br>Let's create lifelong relationships!</p>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4 font-weight-bold text-transform-none">Connect & Collaborate</h2>
              <p className="my-3">Xebia shares a special bond with its people. We cherish this bond with both our current as well as former employees.  The alumni community is being created with an intent to bring together everyone who has contributed to the success of Xebia over the years.</p>
              <p className="my-3">Connect & Collaborate with Xebians and grow your network by sharing ideas , knowledge and participate in exclusive programs.</p>
            </div>
            <div className="col-md-6 px-lg-4">
              <img className="rounded" width="100%" src={about_us_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutUs;