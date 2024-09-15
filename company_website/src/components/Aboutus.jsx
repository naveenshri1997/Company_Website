import aboutus from '../assets/about_us.png'
const Aboutus = () => {
    return (
        <>
            <div className="container-fluid about_us_page_sec">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={aboutus} className="img-fluid" />
                            </div>
                            <div className="col-lg-7">
                                <h3 className="title">Qualwebs is a software development company that specializes in creating impactful solutions
                                    through the use of technology, including design, development, and maintenance services.</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="subtitle">
                                            Qualzee Consultancy Private Limited serves the technology sector with the name Qualwebs,
                                            positioning itself as a leading software development company, that manages the entire
                                            lifecycle of full-app development, specializing in web apps. We cover all aspects
                                            of a successful product launch and maintenance, including ideation, prototyping
                                            and design, project management, development, QA testing, and support. Our approach
                                            is based on Agile principles, and we are dedicated to providing every customer's
                                            product with the same level of care and attention that we give our own products.
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="subtitle">
                                            Qualwebs services are designed to help companies scale up their development
                                            capabilities while improving productivity, optimizing
                                            costs, and maintaining quality.
                                        </p>

                                        <a class="display-block text-primary" href="/services/software-development">
                                            <p class="border-primary">Software Development Services</p></a>

                                        <a class="display-block text-primary" href="/services/ui-ux-design">
                                            <p class="border-primary">Product Strategy, UX / UI Services</p></a>

                                        <a class="display-block text-primary" href="/services/digital-transformation">
                                            <p class="border-primary">Digital Transformation Services</p></a>

                                        <a class="display-block text-primary" href="/services/data-engineering">
                                            <p class="border-primary">Data Engineering Services</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            {/* <div class="container-fluid">
                    <div className="row">
                        <div class="col-12 content vision-content">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="col-12 card card-float aos-init aos-animate" data-aos="fade-up">
                                        <h4 class="title-sec dark fw-bold"><span class="text-primary">Our Vision</span><b>.</b></h4>
                                        <p class="mb-0">Be the ultimate choice for focused clients &amp;
                                            quality-driven technology enthusiasts around the globe!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-12 content mission-content mb-0">
                            <div class="row justify-content-end">
                                <div class="col-md-7">
                                    <div class="col-12 card card-float aos-init aos-animate" data-aos="fade-up">
                                        <h4 class="title-sec dark">
                                            <span class="text-primary fw-bold">Mission</span><b>.</b>
                                        </h4>
                                        <p class="mb-0">At Qualwebs, our mission is dedicated to delivering innovative, effective, and efficient IT
                                            solutions/services to entrepreneurs &amp; enterprises around the globe with integrity and
                                            accountability using potential innovatively. We strive to be: Diversified workplace |
                                            Optimistic &amp; Solution driven Mindset Global Reach | Healthy Workplace |
                                            Quality Guaranteed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>               
            </div> */}
        </>
    )
}
export default Aboutus;