import React from 'react'
// import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroComponents'
import { Button } from '../ButtonElements'


const Hero = () => {
    return (
        <HeroContainer id="hero">
            <HeroBg>
                {/* <VideoBg controls autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Hello! I'm Yona.
                </HeroH1>
                <HeroP>
                    I'm currently participating in Generasi Gigih powered by Yayasan Anak Bangsa Bisa and Gojek
                    in Front End Engineer Learning Path. In this learning path, I learn about making webpages using React JS. 
                    This is how my journey with #GenerasiGigih in the past three weeks looks like.   
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="question-no-1"
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} 
                    >
                        Let's Start!
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
