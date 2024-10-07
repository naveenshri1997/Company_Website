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
    console.log('data',data);                    
    console.log('data.data',data.data);        
            setjobs(data);
        })
    },[])
    console.log(jobs);
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
    // const jobs = ['naveen', 'ajay'];
    const data = {
        pagetitle: "Home",
        pagename: "Career",
        image:`${Careerbanner}`
    }
    return (
        <>
            <BreadCruums data={data}/>
            <Navbar />        
            {jobs}
            {jobs.map((job) => {
                                return (
                                    <div>
                                    <Jobs job={job}/>
                                    </div>    
                                )
                            })}            
            <Footer />
        </>
    )
}
export default Careerpage;
