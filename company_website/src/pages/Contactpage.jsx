import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer'
import contact from '../assets/contact_us.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
const Contactpage = () => {
    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [mobile, setMobile] = useState('');
    //const [query, setQuery] = useState('');
    //const [error, setError] = useState(false);
    const [contactdata, setcontactData] = useState({
        name: '',
        email: '',
        mobile: '',
        query: '',        
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const data = {
        pagetitle: "Home",
        pagename: "Contact Us"
    }
    //const submitQuery = async (e) => {
    //    e.preventDefault();
    //    if (!name || !email || !mobile || !query) {
    //        setError(true);
    //        return false
    //    }
    //    const resposne = await fetch('api', {
    //        method: 'POST',
    //        headers: {
    //            'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify({
    //            name,email,mobile,query
    //        })
    //    })
    //    await res.json();
    //}

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        }

        )
    }

    const submitQuery = async (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        const api = "";
        try {
            if (!contactdata.name || !contactdata.email || !contactdata.mobile || !contactdata.query) {
                setError(true);
                return false
            }
            const resposne = await fetch(`${api}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: contactdata.name,
                        email: contactdata.email,
                        mobile: contactdata.mobile,
                        query: contactdata.query
                    })
                })
            await res.json();

        }
        catch (error){
            console.log(error);
        }
       
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
                                <form method='POST' onSubmit={submitQuery} >
                                    <input type="text" className="form-control cus_form" placeholder="Full Name"
                                        onChange={handleChange} value={contactdata.name} />
                                    {error && !contactdata.name && <span className='error'>Please fil this Field *</span>}

                               
                                    <input type="text" className="form-control cus_form" placeholder="Email"
                                        onChange={handleChange} value={contactdata.email} />
                                    {error && !contactdata.email && <span className='error'>Please fill the Field</span> }
                               
                                    <input type="text" className="form-control cus_form" placeholder="Mobile Number"
                                        onChange={handleChange} value={contactdata.mobile} />
                                    {error && !contactdata.mobile && <span className='error'>Please fill the Field</span> }

                                    <textarea type="text" className="form-control cus_form" placeholder="Query"
                                        onChange={handleChange} value={contactdata.query} />
                                    {error && !contactdata.query && <span className='error'>Please fill the Field</span> }

                                    <button className="btn btn-primary cus-btn">
                                        Send Query
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
export default Contactpage;