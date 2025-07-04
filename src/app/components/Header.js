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
              <Image src="/Made with insMind-my_logo.png" alt="Logo" width={128} height={36} />
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
                Brief
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
  
      {mobileMenuOpen && (
        <div 
          className="k-d-lg-none k-position-fixed k-top-0 k-start-0 k-w-100 k-h-100 k-z-index-1050" 
          style={{ 
            backgroundColor: 'var(--kendo-color-app-surface, #ffffff)',
            paddingTop: '70px', 
            transition: 'all 0.3s ease',
            zIndex: 9999
          }}
        >
          
          <div className="k-container k-p-4">
            <div className="k-d-flex k-flex-column k-gap-0">
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('hero')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Home
              </div>
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('solutions')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Solutions
              </div>
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('features')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Features
              </div>
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('testimonials')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Testimonials
              </div>
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('portfolio')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Portfolio
              </div>
              <div 
                className="k-py-4 k-px-3 k-cursor-pointer k-transition-colors" 
                onClick={() => scrollToSection('contact')}
                style={{
                  borderBottom: '1px solid var(--kendo-color-border, rgba(48, 52, 59, 0.10))',
                  color: 'var(--kendo-color-on-app-surface, #30343B)',
                  fontSize: '18px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--kendo-color-surface, #F7F7F8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}