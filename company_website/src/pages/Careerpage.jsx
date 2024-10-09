import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import Jobs from '../components/Jobs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import Careerbanner from '../assets/careerbanner.jpg'
import ScrollToTop from "../pages/ScrollToTop";

const Careerpage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const data = {
        pagetitle: "Home",
        pagename: "Career",
        image:`${Careerbanner}`
    }
    return (
        <>
            <ScrollToTop />
            <BreadCruums data={data}/>
            <Navbar />
            <Jobs />
            <Footer />
        </>
    )
}
export default Careerpage;
