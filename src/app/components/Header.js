'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  AppBar,
  AppBarSection
} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
 import { menuIcon } from '@progress/kendo-svg-icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`k-d-contents ${scrolled ? 'k-shadow' : ''}`}>
      <AppBar
        className="k-pos-relative"
        style={{ boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none', 
                 transition: 'box-shadow 0.3s ease' }}
        themeColor="inherit"
      >
        <AppBarSection className="k-container !k-flex-row k-px-4">
          <div className="k-d-flex k-flex-basis-0 k-flex-grow">
            <a className="k-d-flex" href="#" onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}>
              <Image src="/logo.svg" alt="Logo" width={128} height={36} />
            </a>
          </div>
          
           <div className="k-d-none k-d-lg-flex k-flex-basis-0 k-flex-grow k-justify-content-center">
            <nav className="k-d-flex k-gap-6">
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('hero')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Home
              </button>
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('solutions')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Solutions
              </button>
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('features')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Features
              </button>
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('testimonials')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Testimonials
              </button>
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('portfolio')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Portfolio
              </button>
              <button 
                className="k-button k-button-flat k-button-md k-rounded-md" 
                onClick={() => scrollToSection('contact')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Contact
              </button>
            </nav>
          </div>
    
          <div className="k-d-lg-none k-d-flex k-flex-basis-0 k-flex-grow k-justify-content-end">
            <Button 
              svgIcon={menuIcon} 
              icon="menu" 
              themeColor="primary" 
              fillMode="flat"
              onClick={toggleMobileMenu}
            />
          </div>
        </AppBarSection>
      </AppBar>
      
      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="k-d-lg-none k-position-fixed k-top-0 k-start-0 k-w-100 k-h-100 k-bg-white k-z-index-1050" 
             style={{ paddingTop: '70px', transition: 'all 0.3s ease' }}>
          <div className="k-container k-p-4">
            <div className="k-d-flex k-flex-column k-gap-4">
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('hero')}>Home</div>
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('solutions')}>Solutions</div>
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('features')}>Features</div>
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('testimonials')}>Testimonials</div>
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('portfolio')}>Portfolio</div>
              <div className="k-py-2 k-border-bottom" onClick={() => scrollToSection('contact')}>Contact</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}