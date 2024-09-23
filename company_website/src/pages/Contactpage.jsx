import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer'
import contact from '../assets/contactbanner1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
const Contactpage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = {
        pagetitle: "Home",
        pagename: "Contact Us",
        image:`${contact}`
    }
    return (
        <>
            <BreadCruums data={data} />
            <Navbar />
            <div className="container-fluid contact_us_page">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Ask Your<span
                                style={{ color: '#f84525' }}> Query.</span></h1>
                       
                        <div className="row">
                            <div className="col-md-4" style={{marginTop:'40px'} }>
                                <img src={contact} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <form>
                                    <input type="text" className="form-control cus_form" placeholder="Full Name" />
                               
                                    <input type="text" className="form-control cus_form" placeholder="Email" />

                               
                                    <input type="text" className="form-control cus_form" placeholder="Mobile Number" />
                             
                                    <textarea type="text" className="form-control cus_form" placeholder="Query" />
                             
                                    <button type="text" className="btn btn-primary cus-btn" >Send Query</button>
                                </form>
                                </div>
                            </div>                                 
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contactpage;
