import accountability from '../assets/core/accountability.svg'
import equity from '../assets/core/equity.svg'
import innovation from '../assets/core/innovation.svg'
import integrity from '../assets/core/integrity.svg'
import peoplefocused from '../assets/core/people-focused.svg'
import communication from '../assets/core/communication.svg'

const Corevalues = () => {
    return (
        <>
            <div className="container-fluid corevalues">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">                       

                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Our Core<span
                                style={{ color: '#f84525' }}>Values.</span></h1>

                        <div className="row" style={{marginTop:'50px'} }>
                            <div data-aos="fade-left" data-aos-duration="1600" className="col-lg-4">
                                <div className="card">
                                    <img src={accountability } className="img-fluid" width="70px" />
                                    <h3>Accountability</h3>
                                    <p>Accept responsibility, be transparent, and be trustworthy.</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-duration="1600" className="col-lg-4">
                                <div className="card">
                                    <img src={equity} className="img-fluid" width="70px" />
                                    <h3>Equity</h3>
                                    <p>To be fair and impartial towards all concerned.</p>
                                </div>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="1600" className="col-lg-4">
                                <div className="card">
                                    <img src={innovation} className="img-fluid" width="70px" />
                                    <h3>Innovation</h3>
                                    <p>Acknowledge challenges and have the courage to resolve them differently.</p>
                                </div>
                            </div>

                            <div data-aos="fade-right" data-aos-duration="1600"className="col-lg-4">
                                <div className="card">
                                    <img src={integrity} className="img-fluid" width="70px" />
                                    <h3>Integrity</h3>
                                    <p>We do the right thing with honesty.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1600" className="col-lg-4">
                                <div className="card">
                                    <img src={peoplefocused} className="img-fluid" width="70px" />
                                    <h3>People focused</h3>
                                    <p>We foster an environment of collaboration and “people first” policies.</p>
                                </div>
                            </div>

                            <div data-aos="fade-left" data-aos-duration="1600" className="col-lg-4">
                                <div className="card">
                                    <img src={communication} className="img-fluid" width="70px" />
                                    <h3>Communication</h3>
                                    <p>Care about enriching every interaction, big or small, everything
                                        that indulges positivity in all lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Corevalues;