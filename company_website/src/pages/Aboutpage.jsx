import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Aboutus from '../components/Aboutus';
import Mission from '../components/Mission';
import Corevalues from '../components/Corevalues';
import Review from '../components/Review';
import Footer from '../components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";

const Aboutpage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
        <BreadCruums pagename="About Us"/>
        <Navbar/>
            <Aboutus />
            <Mission />
            <Corevalues />
            <Review />
            <Footer />
        </>
    )
}
export default Aboutpage;