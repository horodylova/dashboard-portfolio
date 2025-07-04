'use client'

import React from 'react';
import Image from 'next/image';

export default function PainPointsSolvedSection() {
  return (
    <section id="solutions" className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container !k-flex-row k-gap-5 k-gap-md-10 k-gap-lg-14 k-flex-wrap k-px-4">
        <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center" style={{ position: 'relative', minHeight: '300px' }}>
          <Image 
            src="/fts-l-1.svg" 
            alt="Image" 
            fill 
            style={{ objectFit: 'contain' }} 
          />
        </div>
   
        <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-14">
          <div className="k-d-flex k-flex-col k-gap-4">
            <h2 className="k-h3 !k-m-0 k-color-primary">
              Actionable Sales Dashboards to Simplify Your Decisions
            </h2>
            <p className="k-font-size-lg k-color-subtle !k-m-0">
            Tired of scattered reports, lost leads, and guessing what your customers want? I create clear, intuitive dashboards that show how your ads on Facebook, Instagram, or Google are actually performing — and how your customers behave in your CRM. See exactly where you're making money and where you're losing opportunities</p>
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
                  Fast and Simple to Start
                </div>
                <div className="k-d-flex">
                  <p className="!k-m-0">
                  No complicated installations — my dashboards are accessible directly in your browser from day one. Connect your existing tools (from simple Google Sheets to sophisticated CRM systems) in days instead of weeks, thanks to smart integrations
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
                  Automated Notifications to Stay Ahead
                </div>
                <div className="k-d-flex">
                  <p className="!k-m-0">
                  Stop missing leads or important sales updates. You'll get instant alerts whenever a customer books, cancels, or if there's an integration issue — so you can act immediately and confidently
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