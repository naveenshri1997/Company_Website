import Navbar from '../components/Navbar';
import About from '../components/About';
import bgimage from '../assets/bg2.png';
import video from '../assets/1.mp4';
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {   

const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

    return (
        <>
            <div className="container-fluid homepage_header">
                <div className="row">
                    <div className="col-lg-12" >
                       
                        <Navbar />  

                        <div className="content">                        
                            <h1 className="londrina heading theme_color_two" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                 We Provide 
                                <span  style={{ color: 'white', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                        words={[' Web Development', ' Sleep', ' Code', ' Repeat!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={200}
                                    deleteSpeed={250}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}                
                                />
                            </span>
                            </h1>

                            <h2 className="header_title">
                                Work with the best team delivering excellence in
                                Mobile App and Web Development.
                                We revolutionize your Business Digitally!</h2>
                        </div>
                        <div className="overlay">
                            <div className="overlay1"></div>
                            <video className='video-overlay' autoPlay loop muted>
                                <source src={video} type='video/mp4' />
                            </video>
                        </div>
                     <About/>
                    </div>
                </div>
            </div>            
        </>
    )
}
export default Home;