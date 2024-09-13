import phone from '../assets/footer/phone.png'
import location from '../assets/footer/location.png'
import email from '../assets/footer/email.png'
import map from '../assets/map.png'
const Footer = () => {
    const styleone = {
        backgroundImage: `url('${map}')`,
    }
    return (
        <>
            <div className="footer container-fluid" style={styleone}>
                <div className="row justify-content-center" style={{ position: 'relative', borderBottom: '1px solid #616161a8' } }>
                    <div className="col-lg-11 ">
                        <div className="row" >
                               <h3>QUICK CONTACTS</h3>
                            <div className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={location} width="50px"/>
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>Bhopal,M.P</p></div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={phone} width="50px" />
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>+91 08754123054</p></div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row footer_box">
                                    <div className=" col-md-auto mt-2">
                                        <img className="img-fluid footer_small_img" src={email} width="50px" />
                                    </div>
                                    <div className=" col-md-auto footer_text"><p>sunweb@gmail.com</p></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;