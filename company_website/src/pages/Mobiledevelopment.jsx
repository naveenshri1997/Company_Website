import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer';

import mobile from '../assets/single_service/mobile.png'
import ScrollToTop from "../pages/ScrollToTop";
import Mobilebanner from '../assets/android_banner.png'

const Mobiledevelopment = () => {
    const data = {
        pagetitle: "Services",
        pagename: "Mobile Development",
        image: `${Mobilebanner}`
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
                                <img src={mobile} className="img-fluid" />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="title" style={{ fontSize: '35px' }}>Mobile Development Services</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="subtitle">
                                            Mobile development services specialize in creating applications for smartphones and tablets across various platforms, including iOS and Android. These services encompass the entire app lifecycle, from ideation and design to development, testing, and deployment. Developers use programming languages like Swift, Java, and Kotlin, along with frameworks like React Native and Flutter, to build high-performance, user-friendly apps. Ongoing support and updates are provided to ensure compatibility, security, and an optimal user experience in the ever-evolving mobile landscape.
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
export default Mobiledevelopment;