'use client'

import React, { useState, useEffect } from 'react';
import testimonialsData from '../../../public/data/testimonials.json';
import { SvgIcon } from '@progress/kendo-react-common';
import { arrowLeftIcon, arrowRightIcon } from '@progress/kendo-svg-icons';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;

  useEffect(() => {
     if (testimonialsData && testimonialsData.testimonials) {
      setTestimonials(testimonialsData.testimonials);
    }
  }, []);

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

  return (
    <section id="testimonials" className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
          Real Results, Real Feedback
          </h2>
        </div>
        <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-3 k-gap-4 k-gap-lg-5">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="k-d-flex k-flex-col k-gap-5 k-p-6 k-bg-surface-alt k-border k-border-solid k-border-border k-rounded-lg k-overflow-hidden">
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
                />
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
                <div className="k-d-flex k-flex-col k-gap-4">
                  
                  <div className="k-d-flex">
                    <p className="!k-m-0 k-line-height-md">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-mt-8">
          <div className="k-d-flex k-align-items-center k-gap-4">
            <button 
              onClick={goToPrevPage} 
              className="k-btn k-btn-md k-btn-primary k-rounded-full k-d-flex k-align-items-center k-justify-content-center"
              style={{ width: '40px', height: '40px' }}
              aria-label="Previous page"
            >
              <SvgIcon icon={arrowLeftIcon} size="medium" />
            </button>
            
            <div className="k-d-flex k-gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
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
              ))}
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