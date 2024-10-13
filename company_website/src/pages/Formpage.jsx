import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../pages/ScrollToTop";
//import uploadFile from '../helper/UploadFile';

const Formpage = () => {
    const history = useNavigate();
    const [job, setjob] = useState([]);

    const { id } = useParams();     
    const [jobId, setjobId] = useState('');
    const [applicantName, setapplicantName] = useState('');
    const [applicantState, setapplicantState] = useState(1);

    
    const [applicantDescription, setapplicantDescription] = useState('');

    const [cv, setcv] = useState('PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjIiIHdpZHRoPSIxMDYwIiBoZWlnaHQ9IjY2MiIgdmlld0JveD0iMCAwIDExMzMgNzA4Ij48Zz48ZyBpZD0id0FxNHg4UUwiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PGRlZnM+PCEtLS0tPjwhLS0tLT48IS0tLS0+PC9kZWZzPjwhLS0tLT48IS0tLS0+PGc+PCEtLS0tPjxnIHRyYW5zZm9ybT0iIj48IS0tLS0+PGcgaWQ9IndBcTR4OFFMX29yaWdpbiIgdHJhbnNmb3JtPSJza2V3WCgwKSBza2V3WSgwKSI+PHBhdGggaWQ9InNoYXBlcGF0aF93QXE0eDhRTCIgZD0iTTAsMEwxMTMyLjYzODg4ODg4ODg4OSAwTDExMzIuNjM4ODg4ODg4ODg5IDcwNy44OTkzMDU1NTU1NTU3TDAgNzA3Ljg5OTMwNTU1NTU1NTd6IiBmaWx0ZXI9IiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsgc3Ryb2tlOiBub25lOyI+PC9wYXRoPjwvZz48IS0tLS0+PC9nPjwhLS0tLT48L2c+PC9nPjwvZz48Zz48ZyBpZD0iVUY4aEY4UEgiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDMxLjc2LDI0NS44NikiIHN0eWxlPSIiPjxkZWZzPjwhLS0tLT48IS0tLS0+PCEtLS0tPjwvZGVmcz48IS0tLS0+PCEtLS0tPjxnPjwhLS0tLT48ZyB0cmFuc2Zvcm09IiI+PCEtLS0tPjxnIGlkPSJVRjhoRjhQSF9vcmlnaW4iIHRyYW5zZm9ybT0ic2tld1goMCkgc2tld1koMCkiPjxwYXRoIGlkPSJzaGFwZXBhdGhfVUY4aEY4UEgiIGQ9Ik0wLDBDMCwyNDkuNDgsMSwyNzAuMjIsMSwyNzAuMjJMMTIwLjE1LDkyLjQ3TDIwOC4yNCwyMDkuMjNDMjA4LjI0LDIwOS4yMywyMDcuMjcsNzkuNCwyMDUuNjUsNDAuNzdDMjA0LjAzLDIuMTUsMTgzLjYxLDEuMzYsMTgzLjgzLDEuNDVDMTg0LjA1LDEuNTQsMTgzLjk1LDEzNC42MSwxODMuOTUsMTM0LjYxTDEyMC4yLDQ5LjQ3TDIwLjczLDE4OC4yOEMyMC43MywxODguMjgsMjUuNjUsNjYuMjYsMjQuNDYsMzcuMTRDMjMuMjcsOC4wMiwwLDAsMCwwWiIgZmlsdGVyPSIiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZTogcmdiKDMyLCAzMiwgMzIpOyBzdHJva2Utd2lkdGg6IDEuMjsiPjwvcGF0aD48L2c+PCEtLS0tPjwvZz48IS0tLS0+PC9nPjwvZz48ZyBpZD0iY1puTmNUeGwiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDgxLjk0MzA3Njc5NzkwOTY3LDI0NS4wMzg2ODg1MjQ1OTAxNikiPjxkZWZzPjwhLS0tLT48IS0tLS0+PCEtLS0tPjwvZGVmcz48IS0tLS0+PCEtLS0tPjxnPjwhLS0tLT48ZyB0cmFuc2Zvcm09IiI+PCEtLS0tPjxnIGlkPSJjWm5OY1R4bF9vcmlnaW4iIHRyYW5zZm9ybT0ic2tld1goMCkgc2tld1koMCkiPjxwYXRoIGlkPSJzaGFwZXBhdGhfY1puTmNUeGwiIGQ9Ik0yMy40NywwQzIzLjQ3LDkyLjQzLDIzLjQ3LDk5LjQ0LDIzLjQ3LDk5LjQ0TDAuNzYsMTM3LjI1QzAuNzYsMTM3LjI1LC0wLjk1LDYxLjcyLDAuNzYsMzUuMDFDMi40Niw4LjMsMjMuNDcsMCwyMy40NywwWiIgZmlsdGVyPSIiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IHN0cm9rZTogcmdiKDMyLCAzMiwgMzIpOyBzdHJva2Utd2lkdGg6IDEuMDQ7Ij48L3BhdGg+PC9nPjwhLS0tLT48L2c+PCEtLS0tPjwvZz48L2c+PGcgaWQ9Im5ZMnpMS1ZpIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDQ4NC40Njg3ODk3MjAyOTY5NywyNDUuNTg5OTk5OTk5OTk5OTcpIj48ZGVmcz48IS0tLS0+PCEtLS0tPjwhLS0tLT48L2RlZnM+PCEtLS0tPjwhLS0tLT48Zz48IS0tLS0+PGcgdHJhbnNmb3JtPSIiPjwhLS0tLT48ZyBpZD0iblkyekxLVmlfb3JpZ2luIiB0cmFuc2Zvcm09InNrZXdYKDApIHNrZXdZKDApIj48cGF0aCBpZD0ic2hhcGVwYXRoX25ZMnpMS1ZpIiBkPSJNMS43OCwyNzkuMUwwLDIwMi44OUwyMi4yOSwxNzEuNDhMMjIuMDcsMTk4LjA5TDY2Ljg1LDEzNS45NEwxODMuMDksMjc4Ljc5QzE4My4wOSwyNzguNzksMTgwLjc3LDcxLjQ4LDE3OS45NiwzNi43OUMxNzkuMTUsMi4wOSwyMDcuMjQsMCwyMDcuMjQsMEwyMDguMDEsMzU4LjE2TDY4LjY3LDE4MC43WiIgZmlsdGVyPSIiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYigwLCAwLCAwKTsgc3Ryb2tlLXdpZHRoOiAxLjMyOyI+PC9wYXRoPjwvZz48IS0tLS0+PC9nPjwhLS0tLT48L2c+PC9nPjwvZz48L3N2Zz4="');


    //const handleFileChange = (event) => {
    //    const file = event.target.files[0];

    //    if (file) {
    //        const reader = new FileReader();

    //        reader.onloadend = () => {
    //            setcv(reader.result);
    //        };

    //        reader.readAsDataURL(file);
    //    }
    //};


    //const [error, seterror] = React.useState(false);
    //const [uploadPhoto, setuploadPhoto] = useState('');

    //const handleupload = async (e) => {
    //    const file = e.target.files[0]
    //    const uploadphoto = await uploadFile(file);
    //    setuploadPhoto(file);
    //    setcv(uploadphoto?.url);       
    //}

    //const handleClearUploadphoto = (e) => {
    //    e.stopPropagation();
    //    e.preventDefault();
    //    setuploadPhoto(null);
    //}

    const SubmitQuery = async (e) => {

        e.preventDefault();
        //const formData = new FormData();
        //formData.append('jobId',jobId);
        //formData.append('applicantName', applicantName);
        //formData.append('applicantDescription', applicantDescription);
        //formData.append('cv', cv);        
       

        const resposne = await fetch('https://whitewebtech.onrender.com/api/Applicant/PostApplicant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jobId, applicantName, applicantDescription, applicantState, cv
            })
        })
        const data = await resposne.json();
        console.log(data);
        //history('/thankyou');

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
                                    {/*<input type="file" className="form-control cus_form" placeholder="Upload Cv"*/}
                                    {/*    onChange={handleFileChange} />*/}

                                    {/*<div className='flex flex-col gap-1'>*/}
                                    {/*    <label htmlFor='profile_pic'>Profile Pic:*/}
                                    {/*        <div className='h-14 bg-slate-100 flex justify-center items-center border rounded cursor-pointer'>*/}
                                    {/*            <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>*/}
                                    {/*                {*/}
                                    {/*                    uploadPhoto?.name ? uploadPhoto?.name : 'upload profile photo'*/}
                                    {/*                }*/}
                                    {/*            </p>*/}
                                    {/*            {*/}
                                    {/*                uploadPhoto?.name && <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadphoto}>*/}
                                    {/*                    <IoClose />*/}
                                    {/*                </button>*/}
                                    {/*            }*/}
                                    {/*        </div>*/}
                                    {/*    </label>*/}
                                    {/*    <input type='file'*/}
                                    {/*        id="profile_pic"*/}
                                    {/*        name='profile_pic'*/}
                                    {/*        className='bg-slate-100 px-2 py-1 hidden'*/}
                                    {/*        onChange={handleupload}*/}
                                    {/*    ></input>*/}
                                    {/*</div>*/}

                                    {/*s*/}

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
