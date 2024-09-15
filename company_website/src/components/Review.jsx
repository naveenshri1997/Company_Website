import React, { useCallback } from 'react'

import { DotButton, useDotButton } from '../components/slider/EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../components/slider/EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'



const Review = () => {
    const options = { loop: true }
    const SLIDE_COUNT = [
        {
            'id': 1,
            'data': `I am pleased to share my testimonial for Qualwebs, who have been instrumental in developing
            our e- commerce platform at DailyCoco.Their team's expertise in web development, SEO, and online 
            marketing has helped us to establish a strong online presence and grow our business.Their proactive
            approach and ability to deliver results on time and within budget 
            have been commendable.I highly recommend Qualwebs for their commitment to driving success for their clients.`,
            'author': 'Homesh',
            'designation':'Kalpana Arts'
        },  
        {
            'id': 2,
            'data': `I highly recommend Qualwebs for their expertise and dedication in delivering digital solutions. Their 
            innovative approach and commitment to delivering on time and within budget have been instrumental in driving 
            the success of our partnership.`,
            'author': 'Dr. Subash Mishra',
            'designation': 'Kriti Hospital'
        },
        {
            'id': 3,
            'data': `We highly recommend Qualwebs for their exceptional attention to detail, expertise, and commitment 
            to delivering results in developing our website at the Centre for Healing
            Racism. They have been an invaluable partner.`,
            'author': 'Homesh',
            'designation': 'Kalpana Arts'
        },
        {
            'id': 4,
            'data': `I am pleased to share my testimonial for Qualwebs, who have been instrumental in
            developing our r e-commerce platform at DailyCoco. Their team's expertise in web development,
            SEO, and online marketing has helped us to establish a strong online presence and grow our
            business. Their proactive approach and ability to deliver results on time and within budget 
            have been commendable. I highly recommend Qualwebs for their commitment
            to driving success for their clients.`,
            'author': 'Homesh',
            'designation': 'Kalpana Arts'
        },
        {
            'id': 5,
            'data': `Qualwebs is an excellent technology partner. Their team's expertise and dedication have been
            crucial in developing our college management platform at eCampus. I highly recommend them.`,
            'author': 'Homesh',
            'designation': 'Kalpana Arts'
        },
    ]
    const slides = SLIDE_COUNT;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)
    return (
        <>  
            <div className="container-fluid custom_review" >
                <div className="row" style={{ backgroundColor: '#083576', padding: '100px 0px 0px 50px' }}>
                    <div className="col-lg-12 text-center">
                        
                     
                        <h1 data-aos="fade-up" data-aos-duration="1600" className="mobile_heading londrina heading theme_color_two"
                            style={{ fontWeight: 'bolder ', color: 'black', padding: '0px 10px' }}>Here from <span
                                style={{ color: '#f84525' }}>our clinets.</span></h1>
                    </div>
                </div>
            </div>
            
            
            <section className="embla container-fluid custom_slider_embla">
                <div className="row justify-content-center" style={{ margin: '0px' }}>
                    
                    <div className="col-lg-8">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {slides.map((id) => (
                                    <div className="embla__slide" key={id}>
                                        <div className="embla__slide__number">{id.data}</div>
                                        <div className="embla_title">{id.author}</div>
                                        <div className="embla_designation">{id.designation}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="embla__controls">
                            <div className="embla__buttons">
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>

                            <div className="embla__dots">
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        onClick={() => onDotButtonClick(index)}
                                        className={'embla__dot'.concat(
                                            index === selectedIndex ? ' embla__dot--selected' : ''
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}
export default Review;