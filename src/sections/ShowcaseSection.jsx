import React, { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function ShowcaseSection() {

    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);
    const project4Ref=useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, 
            { opacity: 0, y: 0 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
        );

        const projects = [project1Ref, project2Ref, project3Ref, project4Ref];
        projects.forEach((ref, index) => {
            gsap.fromTo(ref.current, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.3, 
                    ease: 'power2.inOut', 
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top center',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }
    , [sectionRef, project1Ref, project2Ref, project3Ref, project4Ref]);

  return (
    <section id="work" ref={sectionRef} className="relative w-full bg-black pt-20 px-4 md:px-12 overflow-hidden">

      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white pb-5 relative z-20 drop-shadow-[0_0_15px_#F08080]">
        Latest Works
      </h2>

      <div className="relative pt-20 max-w-full grid md:grid-rows gap-20 items-center z-10">

        {/* Project 1 */}
        <div ref={project1Ref} className="flex flex-col md:flex-row items-center gap-5 md:justify-between text-center md:text-left md:items-center relative z-10">
            {/* Optional Dot at Center */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F08080] shadow-[0_0_12px_#F08080] z-40" />
            <div class="h-[1px] left-1/4 right-1/2 bg-[#F08080] shadow-[0_0_30px_5px_#F08080] absolute top-1/2 hidden md:block"></div>
            <a href="hero">
            <img
                src="/images/myProject4-tilted-monitor.png"
                alt="Netflix Clone"
                className="max-w-[38vw]  object-contain mb-6 drop-shadow-[0_0_30px_#595959] transition-transform duration-300 ease-in-out hover:scale-105"
            />
            </a>
            <div class="md:w-[40vw] w-[80vw]">
                <h3 class="text-[#595959] font-bold text-2xl md:text-4xl">Portfolio</h3>
                <span class="text-[#818589] text-base md:text-lg">(Personal Portfolio Website)</span>
                <p class="text-justify text-sm md:text-base mt-2">
                This is a personal portfolio website designed to showcase my projects, skills, and experience in web development and software engineering. Built with modern technologies like React, Tailwind CSS, javascript, spline and figma, the site highlights my work in a clean and interactive layout. It serves as a central platform for potential employers and collaborators to learn more about me and explore my technical capabilities.</p>
                <ul class="flex flex-wrap gap-2 mt-2">
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#tailwind</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#spline</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#three.js</li>

                </ul>
            </div>
        </div>

        {/* Project 2 */}
        <div ref={project2Ref} className="flex flex-col md:flex-row items-center gap-5 md:justify-between text-center md:text-left md:items-center relative z-10">
            {/* Optional Dot at Center */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF3131] shadow-[0_0_12px_#FF3131] z-40" />
            <div class="h-[1px] right-1/4 left-1/2 bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131] absolute top-1/2 hidden md:block"></div>
            <div class="md:w-[40vw] w-[80vw] order-2 md:order-1">
                <h3 class="text-[#11428d] font-bold text-2xl md:text-4xl">IT Consumables</h3>
                <span class="text-[#87CEFA] text-base md:text-lg">(Inventory Management System)</span>
                <p class="text-justify text-sm md:text-base mt-2">
                    This is a full-stack Inventory Management System designed to efficiently manage IT consumables. It allows users to track items, manage categories, handle purchase orders, and issue/return items with role-based access control. Built using React for the frontend, C# (ASP.NET Core) for the backend, and MySQL for data storage, the system ensures smooth and secure inventory operations.                </p>
                <ul class="flex flex-wrap gap-2 mt-2">
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#tailwind</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#ASP.NET (C#)</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#MySQL</li>
                </ul>
            </div>
            <a className='order-1 md:order-2' href="https://inventory-management-system-six-zeta.vercel.app/" target='_blank'>
                <img
                    src="/images/myProject1.png"
                    alt="Inventory Management System"
                    className="max-w-[38vw] object-contain mb-6 drop-shadow-[0_0_30px_#11428d] order-1 md:order-2 transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </a>
        </div>

        {/* Project 3 */}
        <div ref={project3Ref} className="flex flex-col md:flex-row items-center gap-5 md:justify-between text-center md:text-left md:items-center relative z-10">
            {/* Optional Dot at Center */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF3131] shadow-[0_0_12px_#FF3131] z-40" />
            <div class="h-[1px] left-1/4 right-1/2 bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131] absolute top-1/2 hidden md:block"></div>
            <a href="https://aflix8704.netlify.app/" target='_blank'>
            <img
                src="/images/myProject2-tilted.png"
                alt="Netflix Clone"
                className="max-w-[38vw]  object-contain mb-6 drop-shadow-[0_0_30px_#FFC72C] transition-transform duration-300 ease-in-out hover:scale-105"
            />
            </a>
            <div class="md:w-[40vw] w-[80vw]">
                <h3 class="text-[#FFC72C] font-bold text-2xl md:text-4xl">Netflix Clone</h3>
                <span class="text-[#FF3131] text-base md:text-lg">(Streaming Platform)</span>
                <p class="text-justify text-sm md:text-base mt-2">
                    Built a Netflix clone using HTML, CSS, Tailwind and JavaScript. The platform offers a responsive design, dynamic content display, and smooth interactions, mimicking the layout and features of a popular streaming service for both movies and web series.                </p>
                <ul class="flex flex-wrap gap-2 mt-2">
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#tailwind</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
                </ul>
            </div>
        </div>

        {/* Project 4 */}
        <div ref={project4Ref} className="flex flex-col md:flex-row items-center gap-5 md:justify-between text-center md:text-left md:items-center relative z-10">
            {/* Optional Dot at Center */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF3131] shadow-[0_0_12px_#FF3131] z-40" />
            <div class="h-[1px] right-1/8 left-1/2 bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131] absolute top-1/2 hidden md:block"></div>
        
            <div class="md:w-[40vw] w-[80vw] order-2 md:order-1">
                <h3 class="text-[#DA70D6] font-bold text-2xl md:text-4xl">Sentiment Analysis</h3>
                <span class="text-[#592db9] text-base md:text-lg">(ML Project)</span>
                <p class="text-justify text-sm md:text-base mt-2">
                This project analyzes public sentiment around Hackfest events using natural language processing techniques. It collects and processes text data to classify opinions as positive or negative, providing insights into audience perception. Built with machine learning models, it helps organizers understand participant feedback and improve future events.</p>
                <ul class="flex flex-wrap gap-2 mt-2">
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#tailwind</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
                    <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#spline</li>
                </ul>
            </div>
            <a className='order-1 md:order-2' href="#" target='_blank'>
            <img
                src="/images/myProject3-mobile-tilted.png"
                alt="Netflix Clone"
                className="max-w-[18vw]  object-contain mb-6 drop-shadow-[0_0_30px_#800080] order-1 md:order-2 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            </a>
        </div>

        {/* ⬇️ Vertical Center Line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#F08080]/5 via-[#FF3131] to-[#FF3131]/10 opacity-80  -z-10 pointer-events-none" />
      </div>
    </section>
  );
}

export default ShowcaseSection;