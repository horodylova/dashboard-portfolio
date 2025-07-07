'use client'
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="k-bg-surface k-py-8 k-py-md-10 k-py-lg-12">
      <div className="k-container">
        <div className="k-px-4">
  
          <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-2 k-gap-8 k-gap-md-12 k-mb-8">
          
            <div className="k-d-flex k-flex-col k-gap-6">
              <div className="footer-brand-section">
                <Image 
                  src="/logo3.png" 
                  alt="Logo" 
                  width={128} 
                  height={36}
                  className="k-mb-4"
                />
                <p className="footer-description k-font-size-lg k-color-subtle k-mb-6">
                  Professional freelance services focused on delivering high-quality results with attention to detail
                </p>
                <a
                  href="https://www.upwork.com/freelancers/svitlanah11?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-upwork-button k-d-inline-flex k-align-items-center k-gap-3"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 2.934 0 5.32-2.389 5.32-5.32 0-2.932-2.386-5.321-5.32-5.321z"/>
                  </svg>
                  <span>Find me on Upwork</span>
                </a>
              </div>
            </div>

      
            <div className="k-d-flex k-flex-col k-gap-6">
              <div className="footer-legal-section">
                <h3 className="footer-section-title k-color-on-app-surface k-mb-5">
                  Legal Information
                </h3>
                <div className="footer-legal-list">
                  <div className="footer-legal-item">
                    <div className="footer-legal-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                    <span>No part of this website may be copied</span>
                  </div>
                  <div className="footer-legal-item">
                    <div className="footer-legal-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                      </svg>
                    </div>
                    <span>Self-employed in the UK</span>
                  </div>
                  <div className="footer-legal-item">
                    <div className="footer-legal-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H5V21H19V9ZM12 18C10.34 18 9 16.66 9 15C9 13.34 10.34 12 12 12C13.66 12 15 13.34 15 15C15 16.66 13.66 18 12 18ZM12 13.5C11.17 13.5 10.5 14.17 10.5 15C10.5 15.83 11.17 16.5 12 16.5C12.83 16.5 13.5 15.83 13.5 15C13.5 14.17 12.83 13.5 12 13.5Z"/>
                      </svg>
                    </div>
                    <span>No cookies are used on this site</span>
                  </div>
                  <div className="footer-legal-item">
                    <div className="footer-legal-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    </div>
                    <span>Your details are used only to reply to your enquiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider k-mb-6"></div>
            <div className="k-d-flex k-justify-content-between k-align-items-center k-flex-wrap k-gap-4">
              <p className="k-color-subtle k-mb-0 k-font-size-sm">
                © 2024 Svitlana Horodylova. All rights reserved
              </p>
              <div className="footer-made-with k-color-subtle k-font-size-sm">
                Made with care in the UK
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}