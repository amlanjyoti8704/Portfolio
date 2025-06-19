const navLinks = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "About",
      link: "#about",
    },
    // {
    //   name: "Skills",
    //   link: "#skills",
    // },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  const words = [
    { text: "Ideas. . . . .", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs . .", imgPath: "/images/designs.svg" },
    { text: "Code. . . . .", imgPath: "/images/code.svg" },
    { text: "Ideas. . . . .", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs . .", imgPath: "/images/designs.svg" },
    { text: "Code. . . . .", imgPath: "/images/code.svg" },
  ];

  const word = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 0, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 4, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/TechLogo/react.png",
      imgname: "React",
    },
    {
        imgPath: "/TechLogo/html.png",
        imgname: "HTML",
    },
    {
      imgPath: "/TechLogo/css.png",
      imgname: "CSS",
    },
    {
      imgPath: "/TechLogo/javascript.png",
      imgname: "JavaScript",
    },
    {
      imgPath: "/TechLogo/nodejs.png",
      imgname: "Node.js",
    },
    {
      imgPath: "/TechLogo/express1.png",
      imgname: "Express",
    },
    {
      imgPath: "/TechLogo/mongoDB1.png",
      imgname: "MongoDB",
    },
    {
      imgPath: "/TechLogo/git.png",
      imgname: "Git",
    },
    {
      imgPath: "/TechLogo/github1.png",
      imgname: "GitHub",
    },
    // {
    //   imgPath: "/TechLogo/nextjs.png",
    //   imgname: "Next.js",
    // },
    {
      imgPath: "/TechLogo/python.png",
      imgname: "Python",
    },
    {
      imgPath: "/TechLogo/tailwindcss.png",
      imgname: "Tailwind",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const abtCards = [
    {
      InstName: "Birla Institute of Technology, Mesra",
      details: [
        "BIT Mesra, established in 1955, is a GFTI located in Ranchi, Jharkhand.",
        "It holds deemed university status under Section 3 of the UGC Act.",
        "The institute is known for academic excellence and research in engineering and technology.",
      ],
      // imgPath: "/images/logos/Birla_Institute_of_Technology_Mesra.png",
      logoPath: "/images/logos/Birla_Institute_of_Technology_Mesra.png",
      title: "Graduation",
      date: "August 2023 - Present",
      score: "CGPA: ",
      responsibilities: [
        "I’m pursuing a B.Tech in Computer Science and Engineering, developing a strong foundation in algorithms, software development, and system design.",
        "I’m actively building skills in web development, databases, and backend technologies to solve real-world problems.",
        "My goal is to leverage both core CS principles and modern tools to create impactful and scalable tech solutions.",
      ],
    },
    {
      InstName: "D.A.V Public School, Hazaribagh",  
      details: [
        "DAV Public School, Hazaribag was established in 1992 and is affiliated to CBSE.",
        "It is known for its strong academic environment and disciplined approach to education.",
        "The school emphasizes holistic development through academics, sports, and co-curricular activities.",
      ],
      // imgPath: "/images/exp2.png",
      logoPath: "/images/logos/DAV.png",
      title: "Higher Secondary",
      date: "April 2020 - May 2022",
      score: "Percentage: 95.6%",
      responsibilities: [
        "I completed my Higher Secondary education in the Science stream, focusing on subjects like Physics, Chemistry, and Mathematics.",
        "This academic path strengthened my analytical thinking and problem-solving abilities.",
        "It laid the groundwork for my interest in computer science and my journey into the tech field.",
      ],
    },
    {
      InstName: "D.A.V Public School, Hazaribagh", 
      details: [
        "DAV Public School, Hazaribag was established in 1992 and is affiliated to CBSE.",
        "It is known for its strong academic environment and disciplined approach to education.",
        "The school emphasizes holistic development through academics, sports, and co-curricular activities.",
      ], 
      // imgPath: "/images/exp3.png",
      logoPath: "/images/logos/DAV.png",
      title: "Matriculation",
      date: "April 2008 - March 2020",
      score: "Percentage: 94%",
      responsibilities: [
        "Completed my Higher Secondary education in the Science stream with a focus on Physics, Chemistry, and Mathematics.",
        "Built a strong academic foundation and developed analytical and problem-solving skills.",
        "Actively participated in co-curricular activities, contributing to overall personal and intellectual growth.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    word,
    abilities,
    logoIconsList,
    counterItems,
    abtCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };