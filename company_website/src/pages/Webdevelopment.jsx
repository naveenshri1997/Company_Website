import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer';
import web from '../assets/single_service/web.png'
import ScrollToTop from "../pages/ScrollToTop";
import Webbanner from '../assets/web_design_banner.png'

const Webdevelopment = () => {
    const data = {
        pagetitle: "Services",
        pagename: "Web Development",
        image: `${Webbanner}`
        
    }
    return (
        <>
            <ScrollToTop />s
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
                                <h1 className="title" style={{ fontSize: '35px' }}>Web Development Services</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="subtitle">
                                            Web development services provide comprehensive solutions for creating and
                                            maintaining websites tailored to business needs. These services include
                                            front-end and back-end development, responsive design, content management
                                            system (CMS) integration, e-commerce solutions, and website optimization
                                            for speed and search engine ranking. Skilled developers use languages
                                            like HTML, CSS, JavaScript, and frameworks to deliver user-friendly
                                            interfaces. Continuous support and updates ensure the website remains
                                            functional and secure, enhancing user experience and driving business
                                            growth in the digital landscape.
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
export default Webdevelopment;