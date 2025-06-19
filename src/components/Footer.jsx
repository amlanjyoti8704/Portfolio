import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" text-white py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto text-center gap-4">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Amlan Jyoti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;