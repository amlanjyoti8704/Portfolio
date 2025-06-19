import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Title from '../components/Title';

function Contact() {
  return (
    <section id='contact' className="border-t text-white pt-16 px-6 flex justify-center items-center md:mt-15">
      <div className="w-full text-center">
        <Title
            className="text-4xl md:text-5xl font-semibold text-center text-white"
            title="Get in Touch – Let’s Connect"
            // sub="💬 Have questions or ideas? Let’s talk! 🚀"
          
        />
        <div className="flex justify-center mt-10 gap-8 text-4xl">
          <a
            href="https://www.linkedin.com/in/amlan-jyoti-a0013717b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/amlanjyoti8704"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amlanjyoti3345@gmail.com&su=Hello%20Amlan&body=I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
                <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;