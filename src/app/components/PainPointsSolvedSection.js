'use client'

import React from 'react';
import Image from 'next/image';

export default function PainPointsSolvedSection() {
  return (
    <section id="solutions" className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container !k-flex-row k-gap-5 k-gap-md-10 k-gap-lg-14 k-flex-wrap k-px-4">
        {/* Изображение (теперь слева) */}
        <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center" style={{ position: 'relative', minHeight: '300px' }}>
          <Image 
            src="/fts-l-1.svg" 
            alt="Image" 
            fill 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        
        {/* Текст (теперь справа) */}
        <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-14">
          <div className="k-d-flex k-flex-col k-gap-4">
            <h2 className="k-h2 !k-m-0 k-color-primary">
              Actionable Sales Reports to grow your business
            </h2>
            <p className="k-font-size-lg k-color-subtle !k-m-0">
            Stop guessing about your ads or losing bookings in your CRM. My dashboards provide real-time sales reports from Facebook, Instagram, Google and CRM data using React, Kendo UI, and API integrations. Instantly see what drives your revenue and make smarter business decisions.            </p>
          </div>
          <div className="k-d-flex k-flex-col k-gap-10">
            <div className="k-d-flex k-gap-4">
              <div className="k-bg-tertiary k-rounded-lg" style={{ width: '56px', height: '56px', position: 'relative' }}>
                <Image 
                  src="/feature-1.svg" 
                  alt="Feature 1" 
                  fill 
                  style={{ objectFit: 'contain' }} 
                />
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                <div className="k-d-flex k-font-size-lg k-color-primary">
                  Fast adoption and web-readiness
                </div>
                <div className="k-d-flex">
                  <p className="!k-m-0">
                  Dashboards ready to use in your browser, on any device. Integration with your tools — from Google Sheets to complex CRMs — takes days, not weeks, using Make.com, Zapier, or custom APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="k-d-flex k-gap-4">
              <div className="k-bg-tertiary k-rounded-lg" style={{ width: '56px', height: '56px', position: 'relative' }}>
                <Image 
                  src="/feature-1.svg" 
                  alt="Feature 1" 
                  fill 
                  style={{ objectFit: 'contain' }} 
                />
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                <div className="k-d-flex k-font-size-lg k-color-primary">
                  Automation and instant notifications
                </div>
                <div className="k-d-flex">
                  <p className="!k-m-0">
                  Never miss a lead or booking. Automated data flows and smart alerts keep you instantly informed about bookings, cancellations, and sync issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}