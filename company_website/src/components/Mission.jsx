import mission from '../assets/mission-bg.png';
const Mission = () => {
    return (
        <>
            <div className="container-fluid mission">
                <div className="row justify-content-center" style={{marginBottom:'50px'} }>
                    <div className="col-lg-10 mission_box" style={{backgroundImage:`url('${mission}')`}}>
                        <div className="row">                            
                            <div className="col-md-7">
                                <div className="col-lg-12 card card-float aos-init aos-animate" data-aos="fade-up">
                                    <h4 className="title"><span class="text-primary">Our Vision</span><b>.</b></h4>
                                    <p className="mb-0 subtitle">Be the ultimate choice for focused clients &amp;
                                        quality-driven technology enthusiasts around the globe!</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10 mission_box" style={{ backgroundImage: `url('${mission}')` }}>
                        <div className="row justify-content-end">
                            <div className="col-md-7">
                                <div className="col-lg-12 card card-float aos-init aos-animate" data-aos="fade-up">
                                    <h4 className="title"><span class="text-primary">Our Mission</span><b>.</b></h4>
                                    <p className="mb-0 subtitle">Be the ultimate choice for focused clients &amp;
                                        quality-driven technology enthusiasts around the globe!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mission;