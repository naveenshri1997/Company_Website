import bread from '../assets/bread.jpg'
const BreadCruums = (props) => {
    const {pagename} = props
    return (
        <>
            <div className="container-fluid breadcrum" style={{ textAlign: "center", background:"#1a1a57"}}>
                <div className="row">
                    <div className="col-lg-12 ">
                        <span class="londrina heading theme_color_two"
                            style={{fontWeight: 'bolder', background: 'none', padding:' 0px 10px',fontSize:'40px'}}>{pagename}</span>
                        </div>
                </div>
            </div>
        </>
    )
}
export default BreadCruums;