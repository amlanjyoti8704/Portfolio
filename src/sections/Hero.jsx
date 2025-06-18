import React from 'react'
import { words } from '../constants'
import {word} from '../constants'
import Button from '../components/Button'
import Robo from '../components/HeroModel/Robo'
import { TypeAnimation } from 'react-type-animation'
import Particles from '../components/HeroModel/Particles'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

function Hero() {
    useGSAP(() => {
        gsap.fromTo('.hero-text',
            {   
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0,
                duration: 1, 
                ease: 'power2.inOut', 
                stagger: 0.2 
            },
        )
    })
    return (
        <section id='hero' className='relative overflow-x-hidden'> 
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className='grid xl:grid-cols-[50%_50%] md:grid-cols-[45%_55%] grid-rows-2 h-screen relative z-20'>
                {/* Left: Hero content */}
                <header className='flex flex-col justify-center md:h-screen w-screen md:w-full md:px-20 px-5 order-2 md:order-1'>
                    <div className='flex flex-col justify-center items-center md:justify-start md:items-start  gap-7 w-full'>
                        <div className='hero-text md:block hidden'>
                            <h1>
                                Shaping 
                                <span className='slide min-w-[370px]'>
                                    <span className='wrapper'>
                                        {word.map((word) => (
                                            <span key={word.text} className='flex items-center xl:gap-3 gap-1 pb-2'>
                                                <img 
                                                    src={word.imgPath}
                                                    alt={word.text} 
                                                    className='xl:size-12 md:size-10 size-7 xl:p-2 p-1 rounded-full bg-white-50'
                                                />
                                                <span>
                                                   {word.text} 
                                                </span>
                                            </span>
                                        ))}
                                        
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <div className='hero-text md:hidden block'>
                            <h1 className='text-4xl font-bold leading-tight'> 
                                Shaping <span className='slide'>
                                            <span className='wrapper'>
                                                {words.map((word) => (
                                                    <span key={word.text} className='flex items-center xl:gap-3 gap-1 pb-2'>
                                                        <img 
                                                            src={word.imgPath}
                                                            alt={word.text} 
                                                            className='xl:size-12 md:size-10 size-7 xl:p-2 p-1 rounded-full bg-white-50'
                                                        />
                                                        <span>
                                                        {word.text} 
                                                        </span>
                                                    </span>
                                                ))}
                                                
                                            </span>
                                        </span> into Real Projects that Deliver Results
                            </h1>

                        </div>
                        <div className='text-gray-400 text-xl text-left'>
                            <h3>
                            <TypeAnimation
                                sequence={[
                                `Hi, I'm Amlan, a developer based in India with a passion for code.`,
                                2000,
                                `I enjoy transforming complex problems into elegant, scalable solutions.`,
                                2000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                            </h3>
                        </div>

                        <Button 
                            className='md:w-80 md:h-16 w-90 h-12'
                            id='work'
                            text='See my Work'
                        />
                    </div>
                </header>
                {/* Right: Hero animation/ 3D model */}
                <figure className="order-1 md:order-2 md:h-screen w-screen md:w-full">
                    <Canvas className="absolute top-0 left-0 w-full h-full z-10 glow-canvas">
                        <ambientLight intensity={0.1} />
                        <Particles count={50} />
                    </Canvas>
                    <div className="md:h-full max-h-[50vh] hero-3d-layout">
                        <Robo />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero
