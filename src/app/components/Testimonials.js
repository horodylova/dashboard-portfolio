'use client'

import React, { useState, useEffect } from 'react';
import testimonialsData from '../../../public/data/testimonials.json';

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
    <section className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
            Read what our users have to say about us
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
        
         <div className="k-d-flex k-justify-content-center k-gap-2 k-mt-8">
          <button 
            onClick={goToPrevPage} 
            className="k-btn k-btn-md k-btn-primary-flat"
            aria-label="Previous page"
          >
            &lt;
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`k-btn k-btn-md ${currentPage === index ? 'k-btn-primary' : 'k-btn-primary-flat'}`}
              aria-label={`Page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={goToNextPage} 
            className="k-btn k-btn-md k-btn-primary-flat"
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}