import HubspotForm from 'react-hubspot-form'
const Joinus = () => {
    return(
        <section className="py-4 pt-lg-5 pb-6 bg-light" id="join-us">
        <h2 className="mb-5 font-weight-bold text-transform-none text-center">Once a Xebian, Always a Xebian</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-4">
              {/* <HubspotForm
                 portalId='9104679'
                 formId='393ed9b1-30c6-4a4f-b028-20d36d1eb541'
              /> */}
              <HubspotForm
                 portalId='697348'
                 formId="71a9ecba-39c4-4b59-9bba-9b55da1ffe8f"
              />
            </div>
            <div className="col-md-6 px-4 px-md-0 pt-4 pt-md-0">
              {/* <h2 className="mb-4 font-weight-bold text-transform-none">Once a Xebian, Always a Xebian</h2> */}
              <p className="my-3">Xebia Alumni network is a platform to connect, share knowledge, and leverage learning for your professional growth.</p>
              <p className="my-3">Join us to reconnect with your friends, make few new ones and enjoy exclusive membership benefits. You will get a chance to be part of our knowledge exchange programs and interact with our leadership team. Also, we have a LinkedIn group where you all can connect and help each other.</p>
              <p className="my-3">Create lasting and lifelong relationships by joining our Alumni community.</p>
              <div className="text-center py-3 mt-4" style={{backgroundColor: '#3075A4'}}>
                <p className="text-white font-weight-bold" style={{fontSize: '16px'}}>Join the Xebia India Alumni group on LinkedIn</p>
                <a target="_blank" href="https://www.linkedin.com/groups/12470012/" className="btn font-weight-bold text-transform-none" id="linkedinButton">Alumni group on LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Joinus;