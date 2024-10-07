import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';
import Footer from '../components/Footer';
import Jobs from '../components/Jobs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
import Careerbanner from '../assets/careerbanner.jpg'

const Careerpage = () => {
    
    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        const res = fetch('https://whitewebtech.onrender.com/api/Jobs/GetAll', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setjobs(data.data);
        })
    },[])
    
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
    const jobs = ['naveen', 'ajay'];
    const data = {
        pagetitle: "Home",
        pagename: "Career",
        image:`${Careerbanner}`
    }
    return (
        <>
            <BreadCruums data={data}/>
            <Navbar />
            {job.map((job) => {
                                return (
                                    <>
                                    <Jobs job={job}/>
                                    </>    
                                )
                            })}            
            <Footer />
        </>
    )
}
export default Careerpage;
