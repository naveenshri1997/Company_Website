import phone from '../assets/footer/phone.png'
import location from '../assets/footer/location.png'
import email from '../assets/footer/email.png'
import map from '../assets/map.png'
import scroll from '../assets/scroll.png';
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import logo from '../assets/white_logo.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

const Footer = () => {
    const styleone = {
        backgroundImage: `url('${map}')`,
    }

  
    const [visible, setVisible] = useState(false);

    // Show Button After Scrolling Down More than 500px
    const toggleVisible = () => {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        // Listen for Scrolling Event
        window.addEventListener("scroll", toggleVisible, false);
        return () => {
            window.removeEventListener("scroll", toggleVisible, false);
        }
    }, []);

     const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional for smooth scrolling
    });
  };
    return (
        <>
            <div className="footer container-fluid" style={styleone}>
                <div className="row justify-content-center" style={{ position: 'relative' }}>
                    <div className="col-lg-11 ">
                        <div className="row" style={{ borderBottom: '1px solid #f9de4b', paddingBottom: '20px', }}>
                            <h1 class="footer_title">QUICK CONTACTS</h1>
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
                                    <div className=" col-md-auto footer_text"><p>info@whitewebtech.com</p></div>

                                </div>
                            </div>
                        </div>
                        <div class="row footer_part_two">
                            <div class="col-lg-5 col-sm-12">
                                <Link class="mobile_logo navbar-brand  londrina" to="/"><img src={logo}
                                    className="img-fluid" width="50px" /> White<span style={{ color: '#f84525' }}>Web </span><span className="mobile_logo_sub">Tech</span></Link>                              
                                <p class="footer_para">At White Web Tech, we're committed to driving innovation and providing cutting-edge IT solutions
                                    tailored to meet the needs of our clients. Our team of experts delivers excellence in software development, web design,
                                    digital transformation, and IT consulting, ensuring that your business stays ahead in the digital age. We believe in empowering
                                    businesses with technology, offering reliable and scalable solutions that foster growth and efficiency. Partner with White Web
                                    Tech today, and let us help you navigate the future of IT with confidence and success. Together,
                                    we'll shape the digital landscape for tomorrow.</p>
                                
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                
                                <h3 class="para_heading">Our Services</h3>
                                <ul>
                                    <li><Link class="dropdown-item" to="/webdev">Web Development</Link></li>
                                    <li><Link class="dropdown-item" to="/mobiledev">Mobile Development</Link></li>
                                    <li><Link class="dropdown-item" to="/uiux">UI/UX Development</Link></li>                                     
                                </ul>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <h3 class="para_heading">Useful Links</h3>
                                <ul>
                                    <li>
                                        <Link to='/'>Home</Link>                                       
                                    </li>
                                    <li><Link to="/about">About Us</Link></li>                                    
                                    <li>
                                        <Link to="/contactpage">Contact Us</Link>                            
                                        </li>
                                    <li> <Link to='/career'>Career</Link></li>                                    
                                </ul>
                                <ul className="social_icon">
                                    <li><Link to='https://www.linkedin.com/company/whiteweb-tech/'><img src={linkedin} className="img-fluid" width="" /></Link></li>
                                    <li><a><img src={whatsapp} className="img-fluid" width="" /></a></li>

                                    <li><a><img src={insta} className="img-fluid" width="" /></a></li>
                                    <li><a><img src={facebook} className="img-fluid" width="" /></a></li>

                                </ul>
                                <div onClick={scrollToTop} className={visible ? "back-to-top-visible scroll_top_btn" : "scroll_top_btn"}>
                                    <img src={scroll} className="img-fluid" width="50px" />
                                </div>
                            </div>
                        </div>
                        <div className="footer_part_three text-center">
                            <p>&copy; <Link to="https://whitewebtech.com">WhiteWeb Tech </Link>  2024 All rights reserved.</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer;
