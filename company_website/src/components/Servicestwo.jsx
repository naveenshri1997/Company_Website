import Webdevelopment from '../assets/services2/web-development.svg'
import uiuxdesign from '../assets/services2/ui-ux-design.svg'
import mobileappdevelopment from '../assets/services2/mobile-app-development.svg'
import softwaredevelopment from '../assets/services2/software-development.svg'
import softwaretesting from '../assets/services2/software-testing-and-qa.svg'
import digitaltransformation from '../assets/services2/digital-transformation.svg'
import devOps from '../assets/services2/devOps-eng.svg'
import dataengineering from '../assets/services2/data-engineering.svg'
const Servicestwo = () => {
    return (
        <>
            <div className="container-fluid home_page_service_2">
                <div className="row justify-content-center">
                    <div className="col-lg-11 text-center">
                        <div className="row">
                            <div className="col-md-12 home_service_one" >
                                <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                                    style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Our <span
                                        style={{ color: '#f84525' }}>Services</span></h1>
                                <div className="row" style={{ marginTop: '50px' }}>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        
                                            <div className="card card_back">
                                                <div className="card_content">
                                                    <img className="img-fluid cus-img" src={Webdevelopment} width="250px" />
                                                    <h4 className="service_title">WEB DEVELOPMENT</h4>
                                                <p className="service_subtitle">Web development involves creating, designing, and maintaining
                                                    websites using coding languages, databases, and server management.</p>
                                                </div>
                                            </div>
                                        
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                      
                                            <div className="card card_back">
                                                <div className="card_content">
                                                    <img className="img-fluid cus-img" src={uiuxdesign} width="250px" />
                                                    <h4 className="service_title">UI UX DESIGN</h4>
                                                <p className="service_subtitle">UI/UX design focuses on crafting user-friendly
                                                    interfaces and enhancing user experience through intuitive interactions.</p>
                                                </div>
                                            </div>
                                       
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                       
                                            <div className="card card_back">
                                                <div className="card_content">
                                                    <img className="img-fluid cus-img" src={mobileappdevelopment} width="250px" />
                                                    <h4 className="service_title">MOBILE DEVELOPMENT</h4>
                                                <p className="service_subtitle">Mobile development involves building applications for smartphones
                                                    and tablets, focusing on performance, design, and usability.</p>
                                                </div>
                                            </div>
                                      
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={softwaredevelopment} width="250px" />
                                                <h4 className="service_title">SOFTWARE DEVELOPMENT</h4>
                                                <p className="service_subtitle">Software development involves designing, coding, testing, and maintaining
                                                    applications or systems to solve specific problems efficiently.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={digitaltransformation} width="250px" />
                                                <h4 className="service_title">DIGITAL TRANSFORMATION</h4>
                                                <p className="service_subtitle">Digital transformation integrates technology into all business areas, improving
                                                    operations, efficiency, and customer experiences.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={devOps} width="250px" />
                                                <h4 className="service_title">DEVOPS ENGG.</h4>
                                                <p className="service_subtitle">DevOps engineering unifies development and operations,
                                                    automating workflows to enhance software delivery, collaboration, and scalability.
</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={softwaretesting} width="250px" />
                                                <h4 className="service_title">SOFTWARE TESTING</h4>
                                                <p className="service_subtitle">Software testing involves evaluating applications to identify bugs, ensure
                                                    functionality, and verify performance meets specified requirements.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={dataengineering} width="250px" />
                                                <h4 className="service_title">DATA ENGINEERING</h4>
                                                <p className="service_subtitle">Data engineering focuses on designing, building, and managing systems
                                                    to collect, store, and process large datasets.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="1600" className="col-md-4 col-sm-6">
                                        <div className="card card_back">
                                            <div className="card_content">
                                                <img className="img-fluid cus-img" src={softwaredevelopment} width="250px" />
                                                <h4 className="service_title">ARTIFICIAL INTELLIGENCE</h4>
                                                <p className="service_subtitle">Artificial intelligence (AI) involves creating machines that simulate human intelligence,
                                                    enabling tasks like learning, reasoning, and problem-solving.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicestwo;