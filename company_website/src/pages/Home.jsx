import Navbar from '../components/Navbar';
import bgimage from '../assets/11.jpeg';

function Home() {
    const myStyle = {
        backgoundImage: `url(${bgimage})`,
        width:"100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <>
            <div className="container-fluid homepage_header"
                style={myStyle}
            >
                <div className="row">
                    <div className="col-lg-12" >
                       
                        <Navbar />  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;