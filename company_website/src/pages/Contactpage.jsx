import Navbar from '../components/Navbar';
import BreadCruums from '../components/BreadCruums';

import Footer from '../components/Footer'
import contact from '../assets/contactbanner.jpg'
import { useNavigate } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from "react";
const Contactpage = () => {
    const history = useNavigate();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [query, setquery] = useState('');
    const [error, setError] = React.useState(false);

    const submitQuery = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !mobile || !query) {
            setError(true);
            return false
        }
        const resposne = await fetch('https://whitewebtech.onrender.com/api/NewQuery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,lastName,email,mobile,query
            })
        })
        await resposne.json();
        history('/thankyou');
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const data = {
        pagetitle: "Home",
        pagename: "Contact Us",
        image: `${contact}`
    }

    //const [contactdata, setcontactData] = useState({
    //    firstName: '',
    //    lastName: '',
    //    email: '',
    //    mobile: '',
    //    query: '',
    //});

    //const handleChange = (e) => {
    //    const { name, value } = e.target

    //    setcontactData((prev) => {
    //        return {
    //            ...prev,
    //            [name]: value
    //        }
    //    })}

    //const submitQuery = async (e) => {
    //    e.preventDefault();
    //    e.stopPropagation();
    //    const api = "";
    //    try {
    //        if (!contactdata.firstName || !contactdata.lastName || !contactdata.name || !contactdata.email || !contactdata.mobile || !contactdata.query) {
    //            setError(true);
    //            return false
    //        }
    //        const resposne = await fetch(`${api}`, {
    //            method: 'POST',
    //            headers: {
    //                'Content-Type': 'application/json',
    //            },
    //            body: JSON.stringify({
    //                firstName: contactdata.firstName,
    //                lastName: contactdata.lastName,
    //                email: contactdata.email,
    //                mobile: contactdata.mobile,
    //                query: contactdata.query
    //            })
    //        })
    //        await res.json();

    //    }
    //    catch (error) {
    //        console.log(error);
    //    }
    //}

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
                            <div className="col-md-4" style={{ marginTop: '40px' }}>
                                <img src={contact} className="img-fluid" />
                            </div>
                            <div className="col-md-8">                               
                                <form method='POST' >
                                    <input type="text" className="form-control cus_form" placeholder="Full FirstName"
                                        onChange={(e) => setfirstName(e.target.value)} value={firstName} />
                                    {error && !firstName && <span className='error'>Please fil this Field *</span>}

                                    <input type="text" className="form-control cus_form" placeholder="Full LastName"
                                        onChange={(e) => setlastName(e.target.value)} value={lastName} />
                                    {error && !lastName && <span className='error'>Please fil this Field *</span>}

                                    <input type="text" className="form-control cus_form" placeholder="Email"
                                        onChange={(e) => setemail(e.target.value)} value={email} />
                                    {error && !email && <span className='error'>Please fill the Field</span>}

                                    <input type="text" className="form-control cus_form" placeholder="Mobile Number"
                                        onChange={(e) => setmobile(e.target.value)} value={mobile} />
                                    {error && !mobile && <span className='error'>Please fill the Field</span>}

                                    <textarea type="text" className="form-control cus_form" placeholder="Query"
                                        onChange={(e) => setquery(e.target.value)} value={query} />
                                    {error && !query && <span className='error'>Please fill the Field</span>}
                                   
                                    <button type="submit" onClick={submitQuery} className="btn btn-primary cus-btn">
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
