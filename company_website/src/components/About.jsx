
import { Link } from 'react-router-dom'
import about from '../assets/about.png'


const About = () => {

    return (
        <div className="container-fluid home_page_about">
            <div className="row justify-content-center">
                <div className="col-lg-12 ">
                    <div className="row">
                       
                        <div className="col-lg-7 home_about_two">
                            <h1 data-aos="fade-right" data-aos-duration="1200" className="mobile_heading londrina heading theme_color_two"
                                style={{ fontWeight: 'bolder ', textAlign: 'left',color:'black', padding: '0px 10px' }}>About <span
                                    style={{ color: '#f84525' }}>Us</span></h1>
                            <p data-aos="fade-right" data-aos-duration="1200"  className="about_title">Welcome to REIWA Technology Systems Pvt Ltd</p>                         

                            <p data-aos="fade-up" data-aos-duration="1200" className="about_title">
                                At Qualwebs, we distinguish ourselves through a combination of expertise, innovation, and commitment to quality.
                                Qualwebs harnesses cutting-edge technologies including blockchain, web3, machine learning, and artificial
                                intelligence to provide innovative solutions for our clients. Backed by an experienced team of IT Engineers
                                and a robust framework, Qualwebs assists cutting-edge technologies including blockchain, web3, machine learning, and artificial
                                intelligence to provide innovative solutions for our clients. Backed by an experienced team of IT Engineers
                                and a robust framework, Qualwebs assists businesses in developing bespoke software and mobile applications
                                that drive seamless digital transformation.
                            </p>

                            <Link className='navbar_cus_main_btn  theme_color_two' to='/about' style={{ fontWeight: 'bolder ' } }>Learn More</Link>
                        </div>
                        <div className="col-lg-5 home_about_one" >
                            <img data-aos="fade-up" data-aos-duration="1200" src={about} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About