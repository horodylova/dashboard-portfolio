'use client'

import React, { useState, useEffect } from 'react';
import { ScrollView } from '@progress/kendo-react-scrollview';
import { SvgIcon } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import Image from 'next/image';
import { arrowLeftIcon, arrowRightIcon, quotesIcon } from '@progress/kendo-svg-icons';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.testimonials);
      })
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);

  const handlePageChange = (e) => {
    setCurrentPage(e.newPage);
  };

  return (
    <section className="k-bg-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
            What Clients Say
          </h2>
          <p className="k-font-size-lg k-text-center k-color-subtle !k-m-0">
            Hear from professionals who have transformed their data workflows
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="k-d-flex k-flex-col k-gap-8">
            <div className="testimonials-container">
              <ScrollView
                value={currentPage}
                onChange={handlePageChange}
                buttons={false}
                arrowSize="large"
                data={testimonials.map((testimonial, index) => (
                  <div key={index} className="k-d-flex k-flex-col k-flex-md-row k-gap-6 k-p-6 k-bg-app-surface k-rounded-lg">
                    <div className="k-d-flex k-flex-col k-align-items-center k-gap-4 k-p-4" style={{ minWidth: '200px' }}>
                      <div className="k-position-relative" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                        <Image
                          src={testimonial.avatar || '/testmnl-user.png'}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="k-d-flex k-flex-col k-align-items-center k-text-center">
                        <h4 className="k-h5 k-color-primary !k-m-0">{testimonial.name}</h4>
                        <p className="k-color-subtle">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="k-d-flex k-flex-col k-gap-4 k-p-4">
                      <div className="k-d-flex k-justify-content-start">
                        <SvgIcon icon={quotesIcon || 'quotes'} size="large" className="k-color-primary-subtle" />
                      </div>
                      <p className="k-font-size-lg k-color-subtle">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              />
            </div>
            
            <div className="k-d-flex k-justify-content-center k-gap-4">
              <Button
                icon={arrowLeftIcon}
                fillMode="flat"
                themeColor="primary"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              />
              <Button
                icon={arrowRightIcon}
                fillMode="flat"
                themeColor="primary"
                disabled={currentPage === testimonials.length - 1}
                onClick={() => setCurrentPage(Math.min(testimonials.length - 1, currentPage + 1))}
              />
            </div>
          </div>
        ) : (
          <div className="k-d-flex k-justify-content-center k-p-8">
            <p className="k-color-subtle">Loading testimonials...</p>
          </div>
        )}
      </div>
    </section>
  );
}