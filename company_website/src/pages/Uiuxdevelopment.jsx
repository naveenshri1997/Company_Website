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
                                            Qualzee Consultancy Private Limited serves the technology sector with the name Qualwebs,
                                            positioning itself as a leading software development company, that manages the entire
                                            lifecycle of full-app development, specializing in web apps. We cover all aspects
                                            of a successful product launch and maintenance, including ideation, prototyping
                                            and design, project management, development, QA testing, and support. Our approach
                                            is based on Agile principles, and we are dedicated to providing every customer's
                                            product with the same level of care and attention that we give our own products.
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