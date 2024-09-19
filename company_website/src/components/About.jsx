
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
                            <p data-aos="fade-right" data-aos-duration="1200"  className="about_title">Welcome to WhiteWeb Tech Company</p>                         

                            <p data-aos="fade-up" data-aos-duration="1200" className="about_title">
                               We are a dynamic IT company offering specialized web and app development 
                                services designed to bring your business vision to life. With expertise in modern
                                technologies and a passion for innovation, we create custom websites and mobile
                                applications that are not only visually appealing but also optimized for
                                performance and user experience. Our team works closely with clients to 
                                understand their unique needs, ensuring every project aligns with their business 
                                objectives. Whether you're looking to enhance your online presence, streamline 
                                operations, or engage customers, we deliver solutions that drive growth
                                and long-term success in the digital landscape.
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
