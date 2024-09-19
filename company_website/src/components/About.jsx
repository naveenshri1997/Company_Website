
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
                               we are dedicated to helping your business succeed in today’s digital landscape through our 
                                expert web and app development services. Our commitment to quality, innovation, and customer
                                satisfaction drives us to deliver solutions that exceed expectations. By partnering with us
                                , you gain a team that is passionate about turning your ideas into impactful digital experiences. 
                                We believe in long-term collaboration and support, ensuring your digital assets continue to 
                                evolve with your business needs. Let us help you reach new heights with tailored, results-driven
                                solutions that foster growth and keep you ahead in the competitive market
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
