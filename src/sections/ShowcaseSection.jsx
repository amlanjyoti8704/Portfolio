import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
    const sectionRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    // Grouping project refs into an array of refs dynamically
    const projectRefs = useRef([]);
    projectRefs.current = [];

    const addToRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

    // Full static data for your projects
    const allProjects = [
        {
            id: 9,
            title: "Wishflix",
            type: "(Media Streaming Platform)",
            desc: "Wishflix is a media streaming platform that allows users to browse and watch their favorite movies, videos and photos. It provides a seamless viewing experience with a user-friendly interface and a wide selection of content which can be adited by the admin. Each account can hold multiple profiles, each containing a personalized watchlist and viewing history.",
            tags: ["next js", "node.js", "postgresql", "tailwindcss", "supabase", "redis", "docker", "typescript", "vector embeddings", "gemini api"],
            imgSrc: "/images/project_9.png",
            link: "",
            dotColor: "bg-[#f23838]",
            shadowColor: "shadow-[0_0_12px_#ba5a5a]",
            lineColor: "bg-[#f23838] shadow-[0_0_30px_4px_#f23838]",
            imgDropShadow: "drop-shadow-[0_0_30px_#245838]",
            isLeft: true
        },
        {
            id: 8,
            title: "EventHub",
            type: "(Full-Stack Event Management Platform)",
            desc: "EventHub is a full-stack web platform designed to simplify event discovery, ticket booking, and event management. It allows users to browse events, book tickets securely, and receive QR-based digital tickets via email. The platform integrates a complete booking workflow including online payments, automated ticket generation, and real-time ticket verification.",
            tags: ["next js", "tailwindcss", "node.js", "mongodb", "github OAuth", "cloudinary", "stripe"],
            imgSrc: "/images/project8.png",
            link: "https://eventmanagement-puce-nine.vercel.app/",
            dotColor: "bg-[#ffffff]",
            shadowColor: "shadow-[0_0_12px_#F08080]",
            lineColor: "bg-[#ffffff] shadow-[0_0_30px_5px_#7e7a7a]",
            imgDropShadow: "drop-shadow-[0_0_30px_#7e7a7a]",
            isLeft: false
        },
        {
            id: 7,
            title: "Mockly",
            type: "(Web app for Interview Preparation)",
            desc: "Mockly is an AI-powered mock interview platform designed to help students and job seekers practice and improve their interview skills in a realistic environment. The platform simulates real interview scenarios by generating role-specific questions and allowing users to respond and evaluate their performance.",
            tags: ["next js", "tailwindcss", "Vapi", "OpenAI api", "TypeScript", "Firebase", "Spline"],
            imgSrc: "/images/project7.png",
            link: "https://mockly-gamma.vercel.app/",
            dotColor: "bg-[#3383fb]",
            shadowColor: "shadow-[0_0_12px_#11428d]",
            lineColor: "bg-[#609bd3] shadow-[0_0_30px_5px_#606cd3]",
            imgDropShadow: "drop-shadow-[0_0_30px_#846bc9]",
            isLeft: true
        },
        {
            id: 6,
            title: "Blogger",
            type: "(Full-Stack Blogging Platform)",
            desc: "Blogger is a full-stack web application that allows users to create, manage, and share blog posts in a clean and intuitive interface. It features user authentication, role-based access control, post creation, editing, deletion, and image uploads.",
            tags: ["react.js", "tailwindcss", "node.js", "express.js", "mongodb", "jwt-auth", "cloudinary", "mern"],
            imgSrc: "/images/project6.png",
            link: "https://blogger-aj.vercel.app/",
            dotColor: "bg-[#f75802]",
            shadowColor: "shadow-[0_0_12px_#F08080]",
            lineColor: "bg-[#f86401] shadow-[0_0_30px_5px_#F08080]",
            imgDropShadow: "drop-shadow-[0_0_30px_#c58d1c]",
            isLeft: false
        },
        {
            id: 5,
            title: "Rozgar",
            type: "(Web app for Rozgar)",
            desc: "Rozgar is a web-based platform designed to bridge the gap between students and internship opportunities. It helps users explore, apply for, and manage internships through a simple and intuitive interface. The platform focuses on enhancing employability by providing structured access to internships.",
            tags: ["react.js", "express", "tailwind", "css", "javascript", "mongodb", "clerk", "html"],
            imgSrc: "/images/project_5.png",
            link: "https://intern-bano-eight.vercel.app/",
            dotColor: "bg-[#11428d]",
            shadowColor: "shadow-[0_0_12px_#11428d]",
            lineColor: "bg-[#595959] shadow-[0_0_30px_5px_#595959]",
            imgDropShadow: "drop-shadow-[0_0_30px_#87CEFA]",
            isLeft: true
        },
        {
            id: 4,
            title: "Portfolio",
            type: "(Personal Portfolio Website)",
            desc: "This is a personal portfolio website designed to showcase my projects, skills, and experience in web development and software engineering. Built with modern technologies like React, Tailwind CSS, javascript, spline and figma.",
            tags: ["react.js", "tailwind", "css", "javascript", "html", "figma", "spline", "three.js"],
            imgSrc: "/images/myProject4-tilted-monitor.png",
            link: "#hero",
            dotColor: "bg-[#F08080]",
            shadowColor: "shadow-[0_0_12px_#F08080]",
            lineColor: "bg-[#F08080] shadow-[0_0_30px_5px_#F08080]",
            imgDropShadow: "drop-shadow-[0_0_30px_#595959]",
            isLeft: false
        },
        {
            id: 3,
            title: "IT Consumables",
            type: "(Inventory Management System)",
            desc: "This is a full-stack Inventory Management System designed to efficiently manage IT consumables. It allows users to track items, manage categories, handle purchase orders, and issue/return items with role-based access control.",
            tags: ["react.js", "tailwind", "css", "javascript", "ASP.NET (C#)", "html", "MySQL"],
            imgSrc: "/images/myProject1.png",
            link: "https://inventory-management-system-six-zeta.vercel.app/",
            dotColor: "bg-[#FF3131]",
            shadowColor: "shadow-[0_0_12px_#FF3131]",
            lineColor: "bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131]",
            imgDropShadow: "drop-shadow-[0_0_30px_#11428d]",
            isLeft: true
        },
        {
            id: 2,
            title: "Netflix Clone",
            type: "(Streaming Platform)",
            desc: "Built a Netflix clone using HTML, CSS, Tailwind and JavaScript. The platform offers a responsive design, dynamic content display, and smooth interactions, mimicking the layout and features of a popular streaming service.",
            tags: ["tailwind", "css", "javascript", "html"],
            imgSrc: "/images/myProject2-tilted.png",
            link: "https://project2-kohl-five.vercel.app/",
            dotColor: "bg-[#FF3131]",
            shadowColor: "shadow-[0_0_12px_#FF3131]",
            lineColor: "bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131]",
            imgDropShadow: "drop-shadow-[0_0_30px_#FFC72C]",
            isLeft: false
        },
        {
            id: 1,
            title: "Sentiment Analysis",
            type: "(ML Project)",
            desc: "This project analyzes public sentiment around Hackfest events using natural language processing techniques. It collects and processes text data to classify opinions as positive or negative, providing insights into audience perception.",
            tags: ["react.js", "tailwind", "css", "javascript", "html", "spline"],
            imgSrc: "/images/myProject3-mobile-tilted.png",
            link: "https://github.com/amlanjyoti8704/Hackfest-Event-Sentiment-Analysis",
            dotColor: "bg-[#FF3131]",
            shadowColor: "shadow-[0_0_12px_#FF3131]",
            lineColor: "bg-[#FF3131] shadow-[0_0_30px_5px_#FF3131]",
            imgDropShadow: "drop-shadow-[0_0_30px_#800080]",
            isLeft: true,
            isMobileImg: true
        }
    ];

    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 5);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, 
            { opacity: 0, y: 0 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
        );
    }, { dependencies: [], scope: sectionRef });

    useGSAP(() => {
        projectRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(el, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.3, 
                    ease: 'power2.inOut', 
                    scrollTrigger: {
                        trigger: el,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }, { dependencies: [visibleProjects], scope: sectionRef });

    // Force ScrollTrigger calculations up to date when the array modifications happen
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [showAll]);

    const handleToggleWorks = () => {
        if (showAll) {
            const elementsToCollapse = projectRefs.current.slice(5);
            const aboutSection = document.getElementById('about');

            // Find target top scroll coordinate cleanly
            const targetScrollY = aboutSection 
                ? aboutSection.getBoundingClientRect().top - 200 + window.scrollY 
                : sectionRef.current?.getBoundingClientRect().top - 200 + window.scrollY; 

            // 1. Instantly begin smooth browser scrolling back up to the anchor targets
            window.scrollTo({
                top: targetScrollY,
                behavior: 'smooth'
            });

            // 2. Run the visual fade out timeline alongside the window scrolling movement
            gsap.to(elementsToCollapse, {
                opacity: 0,
                y: 30,
                duration: 0.4,
                ease: 'power2.out',
                onComplete: () => {
                    // 3. Drop elements from DOM only after viewport safely moves away
                    setShowAll(false);
                }
            });
        } else {
            setShowAll(true);
        }
    };

    return (
        <section id="work" ref={sectionRef} className="relative w-full bg-black pt-20 pb-20 px-4 md:px-12 overflow-hidden">
            
            {/* Section Title */}
            <h2 className="text-center text-4xl md:text-5xl font-bold text-white pb-5 relative z-20 drop-shadow-[0_0_15px_#F08080]">
                Latest Works
            </h2>

            <div className="relative pt-20 max-w-full grid md:grid-rows gap-20 items-center z-10">
                {visibleProjects.map((project) => (
                    <div 
                        key={project.id}
                        ref={addToRefs} 
                        className="flex flex-col md:flex-row items-center gap-5 md:justify-between text-center md:text-left md:items-center relative z-10"
                    >
                        {/* Optional Dot at Center */}
                        <div className={`hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${project.dotColor} ${project.shadowColor} z-40`} />
                        <div className={`h-[1px] absolute top-1/2 hidden md:block ${project.isLeft ? 'right-1/4 left-1/2' : 'left-1/4 right-1/2'} ${project.lineColor}`}></div>
                        
                        {/* Text Block */}
                        <div className={`md:w-[40vw] w-[80vw] ${project.isLeft ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                            <h3 className={`${project.id === 9 ? 'text-[#f23838]' : project.id === 8 ? 'text-[#939292f5]' : project.id === 7 ? 'text-[#6b40c9]' : project.id === 6 ? 'text-[#d38129f5]' : project.id === 5 ? 'text-[#11428d]' : project.id === 4 ? 'text-[#595959]' : project.id === 3 ? 'text-[#11428d]' : project.id === 2 ? 'text-[#FFC72C]' : 'text-[#DA70D6]'} font-bold text-2xl md:text-4xl`}>
                                {project.title}
                            </h3>
                            <span className={`${project.id === 9 ? 'text-[#f7a6a6]' : project.id === 8 ? 'text-[#5f5f5f]' : project.id === 7 ? 'text-[#b2a5d0]' : project.id === 6 ? 'text-[#bea062]' : project.id === 5 ? 'text-[#87CEFA]' : project.id === 4 ? 'text-[#818589]' : project.id === 3 ? 'text-[#87CEFA]' : project.id === 2 ? 'text-[#FF3131]' : 'text-[#592db9]'} text-base md:text-lg block`}>
                                {project.type}
                            </span>
                            <p className="text-justify text-sm md:text-base mt-2 text-gray-300">
                                {project.desc}
                            </p>
                            
                            <ul className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                                {project.tags.map((tag, idx) => (
                                    <li key={idx} className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-gray-400">
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Image Block */}
                        <a className={`${project.isLeft ? 'order-1 md:order-2' : 'order-1 md:order-1'}`} href={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imgSrc} 
                                alt={project.title} 
                                className={`${project.isMobileImg ? 'max-w-[18vw]' : 'max-w-[38vw]'} object-contain mb-6 ${project.imgDropShadow} transition-transform duration-300 ease-in-out hover:scale-105`}
                            />
                        </a>
                    </div>
                ))}

                {/* ⬇️ Vertical Center Line */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#F08080]/5 via-[#FF3131] to-[#FF3131]/10 opacity-80 -z-10 pointer-events-none" />
            </div>

            {/* Expand / Collapse Control Button */}
            <div className="flex justify-center mt-16 relative z-30">
                <button 
                    onClick={handleToggleWorks}
                    className="px-8 py-3 rounded-full border border-[#FF3131] text-white font-medium bg-black hover:bg-[#FF3131] shadow-[0_0_15px_rgba(255,49,49,0.2)] hover:shadow-[0_0_25px_rgba(255,49,49,0.6)] transition-all duration-300 ease-in-out active:scale-95"
                >
                    {showAll ? 'Show Less' : 'See All Works'}
                </button>
            </div>
        </section>
    );
}

export default ShowcaseSection;