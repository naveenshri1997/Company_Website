import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Careerbanner from '../assets/careerbanner.jpg'

const Jobdetails = () => {
    const { id } = useParams();
    const [job, setjob] = useState([]);

    useEffect(() => {
        const res = fetch(`https://whitewebtech.onrender.com/api/Jobs/GetById?Id=${id}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setjob(data.result);
            console.log(data.result)
            console.log(id);
        })
    }, [id])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = {
        pagetitle: "Home",
        pagename: "Career1",
        image: `${Careerbanner}`
    }
    return (
        <>
            <BreadCruums data={data} />

            <Navbar />

            <div className="container-fluid jobs">

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Current Jobs<span
                                style={{ color: '#f84525' }}> Openings.</span></h1>


                        <div className="card job-card" style={{ marginTop: "50px" }}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4 className="title">{job.name}</h4>
                                    <h4 className="subtitle">{job.title}</h4>
                                    <h4 className="desc">{job.description}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Jobdetails;

