import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import Jobs from '../components/Jobs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";

const Careerpage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    //jobs = [
    //    {
    //        title: 'Frontend',
    //        position: 'Junior Developer',
    //        experience:'1 to 3'
    //    }
    //]
    //const jobs = ['naveen','ajay'];
    return (
        <>
            <BreadCruums pagename="Career"/>
            <Navbar />
            <Jobs />
            <Footer />
        </>
    )
}
export default Careerpage;