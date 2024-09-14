import phone from '../assets/footer/phone.png'
import location from '../assets/footer/location.png'
import email from '../assets/footer/email.png'
import map from '../assets/map.png'
const Footer = () => {
    const styleone = {
        backgroundImage: `url('${map}')`,
    }
    return (
        <>
            <div className="footer container-fluid" style={styleone}>
                <div className="row justify-content-center" style={{ position: 'relative' }}>
                    <div className="col-lg-11 ">
                        <div className="row" style={{ borderBottom: '1px solid #f9de4b', paddingBottom: '20px', }}>
                            <h3>QUICK CONTACTS</h3>
                            <div data-aos="fade-left" data-aos-duration="1600"  className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={location} width="50px" />
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>Bhopal,M.P</p></div>

                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1600"  className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={phone} width="50px" />
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>+91 08754123054</p></div>

                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1600"  className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={email} width="50px" />
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>sunweb@gmail.com</p></div>

                                </div>
                            </div>
                        </div>
                        <div class="row footer_part_two">
                            <div class="col-lg-4">
                                <a class="navbar-brand theme_color_two londrina" style={{ fontSize: '30px' }} href="#">LOGO HERE</a>
                                <p class="footer_para">We have advanced skills & resources to create large-scale solutions as
                                    well as guide startups from idea to profit. We offer customized software
                                    development in Indore. Fovty Solutions, a prominent provides Web Development,
                                    online marketing, cloud marketing, AI, online streaming, etc. Fovty Solutions in
                                    Indore has merged to serve the education and healthcare industries.</p>
                            </div>
                            <div class="col-lg-4">
                                
                                <h3 class="para_heading">Our Services</h3>
                                <ul>
                                    <li>React Native</li>
                                    <li>Angular</li>
                                    <li>Vue.JS</li>
                                    <li>React.JS</li>
                                    <li>iOS</li>
                                    <li>Android</li>
                                    <li>Flutter</li>
                                    <li>Xamarin</li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h3 class="para_heading">Useful Links</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Our Services</li>
                                    <li>Contact Us</li>
                                    <li>Carrier</li>                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer;