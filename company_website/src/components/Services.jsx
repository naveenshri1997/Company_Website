import laptop from '../assets/services/laptop.png'
import DigitalMarketing from '../assets/services/DigitalMarketing.png'
import dotnet from '../assets/services/dotnet.png'
import fullstack from '../assets/services/fullstack.png'
import mobilephone from '../assets/services/mobile-phone.png'
import outsystem from '../assets/services/outsystem.png'
import qa from '../assets/services/qa.png'
import uiux from '../assets/services/uiux.png'
import wordpress from '../assets/services/wordpress.png'

const Services = () => {
    return (
        <div className="container-fluid home_page_service">
            <div className="row justify-content-center">
                <div className="col-lg-12 ">
                    <div className="row">
                        <div className="col-lg-7 home_service_one" >
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={laptop} width="60px" />
                                            <h4 className="service_title">Web App Development</h4>
                                        </div>
                                    </div>
                                </div>      
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={mobilephone} width="60px" />
                                            <h4 className="service_title">Mobile App Development</h4>
                                        </div>
                                    </div>
                                </div>      
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={fullstack} width="60px" />
                                            <h4 className="service_title">FullStack Development</h4>
                                        </div>
                                    </div>
                                </div>      


                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={dotnet} width="60px" />
                                            <h4 className="service_title">Dot Net Development</h4>
                                        </div>
                                    </div>
                                </div>      
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={DigitalMarketing} width="60px" />
                                            <h4 className="service_title">Digital Marketing</h4>
                                        </div>
                                    </div>
                                </div>      
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={outsystem} width="60px" />
                                            <h4 className="service_title">Out Systems</h4>
                                        </div>
                                    </div>
                                </div>      
                                     
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={uiux} width="60px" />
                                            <h4 className="service_title">UI/UX sDevelopment</h4>
                                        </div>
                                    </div>
                                </div>      
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={qa} width="60px" />
                                            <h4 className="service_title">Quality Assurace</h4>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card_content">
                                            <img src={wordpress} width="60px" />
                                            <h4 className="service_title">Wordpress</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>                            
                        </div>
                        <div className="col-lg-5 home_service_two">
                            <span className="londrina heading theme_color_two" style={{ fontWeight: 'bolder ', textAlign: 'left', background: 'black', padding: '0px 10px' }}>Techologies</span>
                            <p className="service_title">We have expertise in various cutting-edge technologies.</p>

                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="service_heading">Backend <span>Technologies</span></h3>
                                    <ul>
                                        <li>Python</li>
                                        <li>Java</li>                                        
                                        <li>PHP</li>
                                        <li>.Net</li>
                                        <li>Node.JS</li>
                                    </ul>

                                    <h3 className="service_heading">Frontend <span>Technologies</span></h3>
                                    <ul>
                                        <li>React Native</li>
                                        <li>Angular</li>
                                        <li>Vue.JS</li>
                                        <li>React.JS</li>
                                        <li>iOS</li>
                                        <li>Android</li>
                                        <li>Flutter</li>
                                        <li>Xamarin</li>
                                    </ul>
                                </div>

                                <div className="col-lg-6">
                                    <h3 className="service_heading">Frameworks <span>Technologies</span></h3>
                                    <ul>
                                        <li>Laravel</li>
                                        <li>Symfony</li>
                                        <li>Django</li>
                                        <li>MongoDB</li>
                                        <li>MEAN</li>
                                        <li>MERN</li>
                                    </ul>

                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default Services;