import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Aboutus from '../components/Aboutus';
import Mission from '../components/Mission';
import Corevalues from '../components/Corevalues';
import Review from '../components/Review';
import Footer from '../components/Footer'
import Contactbanner from '../assets/aboutusbanner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import ScrollToTop from "../pages/ScrollToTop";
import thankou from '../assets/thankyou.png'
import { Link } from 'react-router-dom'

const thankyou = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = {
        pagetitle: "Home",
        pagename: "Thank You",
        image: `${Contactbanner}`
    }
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <BreadCruums data={data} />
            <div className="container-fluid jobs">

                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <img src={thankou} />
                        <h3>Our Team will contact you soon.</h3>
                        <h1>  <Link class="nav-link active" aria-current="page" to='https://whitewebtech.com' style={{color:'red'}}>WhiteWeb Tech</Link> </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default thankyou;
