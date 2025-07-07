'use client'

import React, { useState, useEffect, useRef } from 'react';
import testimonialsData from '../../../public/data/testimonials.json';
import { SvgIcon } from '@progress/kendo-react-common';
import { arrowLeftIcon, arrowRightIcon } from '@progress/kendo-svg-icons';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState(350);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const testimonialContainerRef = useRef(null);
  
  const minSwipeDistance = 50;
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
     if (testimonialsData && testimonialsData.testimonials) {
      setTestimonials(testimonialsData.testimonials);
    }
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const calculateCardHeight = (testimonial) => {
        const baseHeight = 160; 
       
        const textLength = testimonial.text.length;
        const averageCharsPerLine = 50; 
        const lineHeight = 24; 
        const estimatedLines = Math.ceil(textLength / averageCharsPerLine);
        const textHeight = estimatedLines * lineHeight;
     
        const bufferHeight = 40;
        
        return baseHeight + textHeight + bufferHeight;
      };
      
      const heights = testimonials.map(calculateCardHeight);
      const maxHeight = Math.max(...heights, 320); 
      
      setMaxCardHeight(maxHeight + 20);
    }
  }, [testimonials]);

  const testimonialsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const onTouchStart = (e) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNextPage();
    } else if (isRightSwipe) {
      goToPrevPage();
    }
  };

  return (
    <section id="testimonials" className="k-bg-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">Testimonials</h2>
          <p className="k-text-center k-color-subtle !k-m-0">
            {isMobile ? "Real stories from people I've worked with" : "Real stories from people I've worked with — projects and partnerships"}
          </p>
        </div>
      
        <div 
          style={{ minHeight: `${maxCardHeight + (isMobile ? 10 : 20)}px` }}
          ref={testimonialContainerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
    
          <div 
            className={`k-d-grid ${isMobile ? 'k-grid-cols-1' : 'k-grid-cols-1 k-grid-cols-md-3'} k-gap-4 k-gap-lg-5`}
            style={{ 
              minHeight: `${maxCardHeight}px`
            }}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={`${currentPage}-${index}`}
                className="k-d-flex k-flex-col k-gap-5 k-p-6 k-bg-surface-alt k-border k-border-solid k-border-border k-rounded-lg"
                style={{ 
                  minHeight: `${maxCardHeight}px`,
                  height: 'auto' 
                }}
              >
                <div className="k-d-flex k-align-items-start k-justify-content-between">
                  <div className="k-d-flex k-flex-col k-gap-1">
                    <div className="k-font-size-lg k-line-height-md">{testimonial.name}</div>
                    <div className="k-line-height-md k-color-subtle k-font-style-italic">
                      {testimonial.position}
                    </div>
                  </div>
                  <img
                    src="/quotes.svg"
                    alt="Quotation marks"
                    width="75px"
                    height="50px"
                    style={{ flexShrink: 0 }} 
                  />
                </div>
                
                <div className="k-d-flex k-flex-col k-flex-grow">
                  <div className="k-d-flex k-flex-col k-gap-4">
                    <div className="k-d-flex">
                      <p 
                        className="!k-m-0 k-line-height-md"
                        style={{ 
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          hyphens: 'auto'
                        }}
                      >
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-mt-4">
          <div className="k-d-flex k-align-items-center k-gap-4" style={{ width: isMobile ? '240px' : 'auto', justifyContent: 'space-between' }}>
            <button 
              onClick={goToPrevPage} 
              className="k-btn k-btn-md k-btn-primary k-rounded-full k-d-flex k-align-items-center k-justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="Previous page"
            >
              <SvgIcon icon={arrowLeftIcon} size="medium" />
            </button>
            
            <div className="k-d-flex k-gap-2" style={{ width: isMobile ? '120px' : 'auto', justifyContent: 'center' }}>
              {totalPages <= 5 ? (
                Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`k-btn k-btn-md k-rounded-full k-d-flex k-align-items-center k-justify-content-center ${currentPage === index ? 'k-btn-primary' : 'k-btn-primary-flat'}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      boxShadow: currentPage === index ? '0 4px 8px rgba(0, 0, 0, 0.15)' : 'none',
                      transform: currentPage === index ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.2s ease-in-out',
                      fontWeight: currentPage === index ? 'bold' : 'normal'
                    }}
                    aria-label={`Page ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))
              ) : (
                <>
                  <button
                    onClick={() => goToPage(0)}
                    className={`k-btn k-btn-md k-rounded-full k-d-flex k-align-items-center k-justify-content-center ${currentPage === 0 ? 'k-btn-primary' : 'k-btn-primary-flat'}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      boxShadow: currentPage === 0 ? '0 4px 8px rgba(0, 0, 0, 0.15)' : 'none',
                      transform: currentPage === 0 ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.2s ease-in-out',
                      fontWeight: currentPage === 0 ? 'bold' : 'normal'
                    }}
                    aria-label="Page 1"
                  >
                    1
                  </button>

                  {currentPage > 2 && (
                    <span className="k-d-flex k-align-items-center k-justify-content-center k-font-weight-bold" style={{ width: '40px' }}>...</span>
                  )}

                  {currentPage !== 0 && currentPage !== totalPages - 1 && (
                    <button
                      onClick={() => goToPage(currentPage)}
                      className="k-btn k-btn-md k-btn-primary k-rounded-full k-d-flex k-align-items-center k-justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                        transform: 'scale(1.1)',
                        transition: 'all 0.2s ease-in-out',
                        fontWeight: 'bold'
                      }}
                      aria-label={`Page ${currentPage + 1}`}
                    >
                      {currentPage + 1}
                    </button>
                  )}

                  {currentPage < totalPages - 3 && (
                    <span className="k-d-flex k-align-items-center k-justify-content-center k-font-weight-bold" style={{ width: '40px' }}>...</span>
                  )}

                  <button
                    onClick={() => goToPage(totalPages - 1)}
                    className={`k-btn k-btn-md k-rounded-full k-d-flex k-align-items-center k-justify-content-center ${currentPage === totalPages - 1 ? 'k-btn-primary' : 'k-btn-primary-flat'}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      boxShadow: currentPage === totalPages - 1 ? '0 4px 8px rgba(0, 0, 0, 0.15)' : 'none',
                      transform: currentPage === totalPages - 1 ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.2s ease-in-out',
                      fontWeight: currentPage === totalPages - 1 ? 'bold' : 'normal'
                    }}
                    aria-label={`Page ${totalPages}`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>
            
            <button 
              onClick={goToNextPage} 
              className="k-btn k-btn-md k-btn-primary k-rounded-full k-d-flex k-align-items-center k-justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="Next page"
            >
              <SvgIcon icon={arrowRightIcon} size="medium" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}