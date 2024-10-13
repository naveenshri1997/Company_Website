import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer';
import web from '../assets/single_service/single_service1.png'
import ScrollToTop from "../pages/ScrollToTop";
import UIUXbanner from '../assets/uiux_banner.png'

const Uiuxdevelopment = () => {
    const data = {
        pagetitle: "Services",
        pagename: "UI/UX",
        image: `${UIUXbanner}`
    }
    return (
        <>
            <ScrollToTop />
            <BreadCruums data={data} />
            <Navbar />
            <div className="container-fluid about_us_page_sec" style={{ background: '#dfecff' }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={web} className="img-fluid" />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="title" style={{ fontSize: '35px' }}>UI/UX Services</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="subtitle">
                                            UI/UX services focus on enhancing user satisfaction by improving the usability and aesthetic appeal of digital products. These services include user research, wireframing, prototyping, and user testing to create intuitive interfaces. Designers prioritize user experience through visual design, interaction design, and accessibility considerations. By understanding user behavior and preferences, UI/UX professionals ensure that applications and websites are not only visually appealing but also functionally effective, resulting in increased engagement and customer loyalty.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Uiuxdevelopment;