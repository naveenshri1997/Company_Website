import aboutus from '../assets/about_us.png'
const Aboutus = () => {
    return (
        <>
            <div className="container-fluid about_us_page_sec" style={{ background: '#dfecff' }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={aboutus} className="img-fluid" />
                            </div>
                            <div className="col-lg-7">
                                <h1 className="title" style={{fontSize:'35px'}}>Welcome to WhiteWeb Tech Company</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="subtitle">
                                            we are dedicated to helping your business succeed in today’s digital landscape through our expert 
                                            web and app development services. Our commitment to quality, innovation, and customer satisfaction 
                                            drives us to deliver solutions that exceed expectations. By partnering with us , you gain a 
                                            team that is passionate about turning your ideas into impactful digital experiences. We
                                            believe in long-term collaboration and support, ensuring your digital assets continue
                                            to evolve with your business needs. Let us help you reach new heights with tailored, 
                                            results-driven solutions that foster growth and keep you ahead in the competitive market
                                        </p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                       
        </>
    )
}
export default Aboutus;
