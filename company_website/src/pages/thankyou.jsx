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
                    <div className="col-lg-10">
                    <h1> THANKYOU </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default thankyou;
