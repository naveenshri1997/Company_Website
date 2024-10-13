import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ApplicantDashboard = () => {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch applicants from the API
    const fetchApplicants = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://whitewebtech.onrender.com/api/Applicant/GetAll');
            if (!response.ok) throw new Error('Failed to fetch applicants');
            const data = await response.json();
            setApplicants(data.result);
        } catch (error) {
            console.error("Error fetching applicants:", error);
        } finally {
            setLoading(false);
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

    const columnDefs = [
        { headerName: "ID", field: "id", sortable: true, filter: true },
        { headerName: "Name", field: "applicantName", sortable: true, filter: true },
        { headerName: "Description", field: "applicantDescription", sortable: true, filter: true },
        { headerName: "State", field: "applicantState", sortable: true, filter: true },
        { headerName: "Create Date", field: "createDate", sortable: true, filter: true,
            valueFormatter: params => new Date(params.value).toLocaleString() },
        {
            headerName: "Actions",
            field: "id",
            cellRendererFramework: (params) => (
                <button className="btn btn-primary" >
                    Download CV
                </button>
            )
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="my-4" data-aos="fade-up">Applicant Dashboard</h1>
                {loading ? (
                    <div className="text-center">
                        <p>Loading applicants...</p>
                    </div>
                ) : (
                    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                        <AgGridReact
                            rowData={applicants}
                            columnDefs={columnDefs}
                            pagination={true}
                            paginationPageSize={10}
                            defaultColDef={{
                                resizable: true,
                                flex: 1,
                                minWidth: 100,
                            }}
                        />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ApplicantDashboard;
