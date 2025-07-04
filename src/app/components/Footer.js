'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
 
export default function Footer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        const latestProjects = data.projects.slice(-5).reverse();
        setProjects(latestProjects);
      })
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="k-bg-app-surface k-py-8 k-py-md-10 k-py-lg-15 k-color-subtle">
      <div className="k-container">
        <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-2 k-grid-cols-lg-4 k-gap-5 k-px-4">
          <div className="k-d-flex k-flex-col k-gap-10">
            <Image src="/Made with insMind-my_logo.png" alt="Logo" width={128} height={36} />
            <div className="k-d-flex k-flex-col k-gap-4">
              
              <a 
                href="https://www.upwork.com/freelancers/svitlanah11?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="k-d-flex k-align-items-center k-gap-2 k-link k-font-weight-bold k-py-2 k-px-3 k-rounded-md k-transition-colors footer-upwork-button"
              >
                <span>Find me on Upwork</span>
              </a>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
            <div className="footer-column-title">
              Navigation
            </div>
            <div className="footer-links-container">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="k-link k-text-start k-font-size-md footer-nav-button"
              >
                Back to top
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="k-link k-text-start k-font-size-md footer-nav-button"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="k-link k-text-start k-font-size-md footer-nav-button"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="k-link k-text-start k-font-size-md footer-nav-button"
              >
                Portfolio
              </button>
               <button 
                onClick={() => scrollToSection('contact')} 
                className="k-link k-text-start k-font-size-md footer-nav-button"
              >
                Brief
              </button>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
            <div className="footer-column-title">
              Projects
            </div>
            <div className="footer-links-container">
              {projects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="k-link"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
            <div className="footer-column-title">
              Legal
            </div>
            <div className="footer-links-container">
              <p className="k-mb-1">No part of this website may be copied</p>
              <p className="k-mb-1">Self-employed in the UK</p>
              <p className="k-mb-1">No cookies are used on this site</p>
              <p className="k-mb-1">If you submit the brief, your details will be used only to reply to your enquiry</p>
             
            </div>
          </div>
        </div>
        <div className="k-d-flex k-justify-content-center k-mt-8">
          <p className="k-text-center">Copyright © 2024 Svitlana Horodylova. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}