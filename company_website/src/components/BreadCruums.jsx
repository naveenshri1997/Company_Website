import bread from '../assets/breadcrums.jpg'
const BreadCruums = (props) => {
    const {pagename} = props
    return (
        <>            
            <div className="container-fluid breadcrum" style={{ backgroundImage:`url('${bread}')`}}>
                <div className="row justify-content-center" style={{ position: 'relative', zIndex: '1' }}>
                    <div className="col-lg-10">
                        <h1 class="heading" style={{ textAlign: 'left', fontWeight: "bolder", fontSize: '48px', color: 'white' }}>{pagename}</h1> 
                        <p class=" heading"
                            style={{ color: 'white', textAlign: 'left',fontWeight: 'bolder', background: 'none', padding:' 0px 10px',fontSize:'20px'}}>Home / {pagename}</p>
                        </div>
                </div>
            </div>
        </>
    )
}
export default BreadCruums;