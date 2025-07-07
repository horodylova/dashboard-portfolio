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
    <>
      <header 
        className="header-fixed"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1050,
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          transition: 'box-shadow 0.3s ease',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)', 
        }}
      >
        <AppBar
          className="k-w-100"
          style={{ 
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
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
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Home
                </button>
                <button 
                  className="k-button k-button-flat k-button-md k-rounded-md" 
                  onClick={() => scrollToSection('solutions')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Solutions
                </button>
                <button 
                  className="k-button k-button-flat k-button-md k-rounded-md" 
                  onClick={() => scrollToSection('features')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Features
                </button>
                <button 
                  className="k-button k-button-flat k-button-md k-rounded-md" 
                  onClick={() => scrollToSection('portfolio')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Portfolio
                </button>
                <button 
                  className="k-button k-button-flat k-button-md k-rounded-md" 
                  onClick={() => scrollToSection('testimonials')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Testimonials
                </button>
                <button 
                  className="k-button k-button-flat k-button-md k-rounded-md" 
                  onClick={() => scrollToSection('contact')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
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
      </header>
      
    
      <div style={{ height: '80px' }}></div>
  
     
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1060,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            paddingTop: '80px',
            overflowY: 'auto'
          }}
        >
         
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            ×
          </div>
          
          <div className="k-container k-p-4">
            <div className="k-d-flex k-flex-column k-gap-0">
              <div 
                className="mobile-menu-item"
                onClick={() => scrollToSection('hero')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
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
                className="mobile-menu-item"
                onClick={() => scrollToSection('solutions')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
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
                className="mobile-menu-item"
                onClick={() => scrollToSection('features')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
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
                className="mobile-menu-item"
                onClick={() => scrollToSection('portfolio')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
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
                className="mobile-menu-item"
                onClick={() => scrollToSection('testimonials')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
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
                className="mobile-menu-item"
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: '16px 12px',
                  borderBottom: '1px solid rgba(48, 52, 59, 0.10)',
                  color: '#30343B',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(247, 247, 248, 0.8)';
                  e.target.style.paddingLeft = '16px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.paddingLeft = '12px';
                }}
              >
                Brief
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}