import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const ApplicantDashboard = () => {
    const history = useNavigate();
    const [applicants, setApplicants] = useState([]);

    // Fetch the list of applicants
    const fetchApplicants = async () => {
        try {
            const response = await fetch('https://whitewebtech.onrender.com/api/Applicant/GetAll');
            if (!response.ok) throw new Error('Failed to fetch applicants');
            const data = await response.json();
            setApplicants(data.result);
        } catch (error) {
            console.error("Error fetching applicants:", error);
        }
    };

    // Handle CV download
    const downloadCv = async (id) => {
        try {
            const response = await fetch(`https://whitewebtech.onrender.com/api/Applicant/DownloadCv/${id}`);
            if (!response.ok) throw new Error('Failed to download CV');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Applicant_CV_${id}.pdf`; // Adjust the filename as needed
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error("Error downloading CV:", error);
        }
    };

    useEffect(() => {
        fetchApplicants();
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="my-4" data-aos="fade-up">Applicant Dashboard</h1>
                <table className="table table-bordered" data-aos="fade-up" data-aos-duration="1600">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>State</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map(applicant => (
                            <tr key={applicant.id}>
                                <td>{applicant.id}</td>
                                <td>{applicant.applicantName}</td>
                                <td>{applicant.applicantDescription}</td>
                                <td>{applicant.applicantState}</td>
                                <td>{new Date(applicant.createDate).toLocaleString()}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => downloadCv(applicant.id)}>
                                        Download CV
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default ApplicantDashboard;
