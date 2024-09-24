
import { Link } from 'react-router-dom'
import about from '../assets/about.jpg'


const About = () => {

    return (
        <div className="container-fluid home_page_about">
            <div className="row justify-content-center">
                <div className="col-lg-12 ">
                    <div className="row">
                       
                        <div className="col-lg-7 home_about_two">
                            <h1 data-aos="fade-right" data-aos-duration="1200" className="mobile_heading londrina heading theme_color_two"
                                style={{ fontWeight: 'bolder ', textAlign: 'left',color:'black', padding: '0px 10px' }}>Transforming <span
                                    style={{ color: '#f84525' }}>With Innovations</span></h1>
                            <p data-aos="fade-right" data-aos-duration="1200"  className="about_title">We help you bring your business on Digital 
                                Platform using New Generation Web Technologies</p>                         

                            <p data-aos="fade-up" data-aos-duration="1200" className="about_title">
                             Innovation, Service, Certification, Production, Training, Development are the most exclusive 
                                words nowadays and combining all of them with the years of experience of serving and building,
                                we <strong>WhiteWeb Tech </strong> stands. Our one and only goal is to support our Partners by providing the best of
                                services to you because we believe “The World Is You”
                            </p>

{/*                             <Link className='navbar_cus_main_btn  theme_color_two' to='/about' style={{ fontWeight: 'bolder ' } }>Learn More</Link> */}
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
