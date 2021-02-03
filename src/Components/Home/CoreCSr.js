import Csr from './Csr';
import Core from './CoreValues';
import NewsLetter from './NewsLetter';
const CoreCSr = () => {
    return (
        <section className="py-4 pt-lg-5 pb-6 bg-light" id="events">
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsLetter />
                    </div>
                    <div className="col-md-4">
                        <Csr />
                    </div>
                    <div className="col-md-4">
                        <Core />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreCSr;