import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
const Jobs = () => { 
    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        const res = fetch('https://whitewebtech.onrender.com/api/Jobs/GetAll', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            console.log('data', JSON.stringify(data.result));
            setjobs(data.result);
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid jobs">               
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Current Jobs<span
                                style={{ color: '#f84525' }}> Openings.</span></h1>

                        {
                            jobs.map((item) => {
                                return (
                                    <>
                                        <div className="card job-card" style={{ marginTop: "50px" }}>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h4 className="title">{item.name}</h4>
                                                    <h4 className="subtitle">{item.title}</h4>
                                                    <h4 className="desc">{item.description}</h4>
                                                </div>
                                                <span className="col-lg-4 float-right" style={{ marginTop: '15px' }}>
                                                    <Link class="nav-link" to={`/career/${item.id}`} >{item.id}</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jobs;
