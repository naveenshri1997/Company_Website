import { Link } from 'react-router-dom'
import React from "react";
const Jobs = (job) => {   
    return (
        <>
            <div className="container-fluid jobs">               
                {/*<ul>*/}
                {/*{props.items.map((item, index) => (*/}
                {/*    <li key={index}>{item}</li>*/}
                {/*))}*/}
                {/*</ul>*/}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Current Jobs<span
                                style={{ color: '#f84525' }}> Openings.</span></h1>
                        <div className="card job-card" style={{marginTop:"50px"}}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4 className="title">{job.name}</h4>
                                    <h4 className="subtitle">{job.title}</h4>
                                    <h4 className="desc">{job.description}</h4>
                                </div>
                                <span className="col-lg-4 float-right" style={{marginTop:'15px'}}> 
                                    <Link class="nav-link" to='/formpage'>Apply Now</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jobs;
