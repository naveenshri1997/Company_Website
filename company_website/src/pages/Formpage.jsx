import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../pages/ScrollToTop";

const Formpage = () => {
    const history = useNavigate();
    const [job, setjob] = useState([]);

    const { id } = useParams();     
    const [jobId, setjobId] = useState('');
    const [applicantName, setapplicantName] = useState('');
    const [applicantDescription, setapplicantDescription] = useState('');
    const [cv, setcv] = useState('');

    //const [error, seterror] = React.useState(false);
    const SubmitQuery = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('jobId',jobId);
        formData.append('applicantName', applicantName);
        formData.append('applicantDescription', applicantDescription);
        formData.append('cv', cv);        

        const res = await fetch('https://whitewebtech.onrender.com/api/Applicant', {
            method: 'POST',
            body: formData
        });
        await res.json();
        history('/thankyou');
    }

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
        pagename: "Form"
    }
    return (
        <>            
            <ScrollToTop />
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
                                <form method='POST' encType='multipart/form-data'>
                                    { id}
                                    <input type="text" className="form-control cus_form" placeholder="Full Name"
                                        value={applicantName} onChange={(e) => setapplicantName(e.target.value) } />
                                    {/*{error && !applicantName && <span className='error'>Please fil this Field *</span>}*/}

                                    {/*<input type="text" className="form-control cus_form" placeholder="Email" />*/}
                                    {/*<input type="text" className="form-control cus_form" placeholder="Mobile Number" />*/}
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-md-6">*/}
                                    {/*        <input type="text" className="form-control cus_form" placeholder="State" />*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-md-6">*/}
                                    {/*        <input type="text" className="form-control cus_form" placeholder="district" />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <input type="text" className="form-control cus_form" placeholder="Position" value={job.name}
                                        onChange={(e)=> setjobId(id)} disabled />

                                    <small style={{color:'red'} }>Upload Cv</small>
                                    <input type="file" className="form-control cus_form" placeholder="Upload Cv"
                                        onChange={(e) => setcv(e.target.files[0])} />
                                    <input type="text" className="form-control cus_form" placeholder="Description"
                                        value={applicantDescription} onChange={(e) => setapplicantDescription(e.target.value) } />
                                    {/*<button onSubmit={SubmitQuery} type="text" className="btn btn-primary cus-btn" >Apply</button>*/}
                                    <button type="submit" onClick={SubmitQuery} className="btn btn-primary cus-btn">
                                        Apply
                                    </button>
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