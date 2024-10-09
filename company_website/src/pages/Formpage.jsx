import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const { jid } = useParams();


const Formpage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const data = {
        pagetitle: "Home",
        pagename: "Form"
    }
    return (
        <>{jid }
            <BreadCruums data={data} />
            <Navbar />  
            <div className="container-fluid job-form">             
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Share Your<span
                                style={{ color: '#f84525' }}> CV.</span></h1>        
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <form>
                                    <input type="text" className="form-control cus_form" placeholder="Full Name" />

                                    <input type="email" className="form-control cus_form" placeholder="Email" />


                                    <input type="text" className="form-control cus_form" placeholder="Mobile Number" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control cus_form" placeholder="State" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control cus_form" placeholder="district" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control cus_form" placeholder="Position" disabled/>
                                    <small style={{color:'red'} }>Upload Cv</small>
                                    <input type="file" className="form-control cus_form" placeholder="Upload Cv" />

                                    <button type="text" className="btn btn-primary cus-btn" >Apply</button>
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
export default Formpage;