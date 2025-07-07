'use client'

import React from 'react';


export default function FeaturesSection() {
  return (
    <section id="features" className=" k-bg-app-surface  k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
          How I Make Your Data Work Smarter
          </h2>
          <p className="k-font-size-lg k-text-start k-text-md-center k-color-subtle !k-m-0">
          Unlock the full potential of your data with solutions tailored to your workflow, goals, and business logic
          </p>
        </div>
        <div className="k-d-flex k-flex-col k-gap-5">
          <div className="k-d-grid k-grid-cols-1 k-grid-cols-sm-2 k-grid-cols-md-3 k-gap-4 k-gap-lg-5">
      
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
              <div className="k-d-flex k-flex-row k-gap-4 k-align-items-center">
                <div
                  className="k-bg-tertiary k-rounded-lg k-flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-1.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: '80%'
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Custom Interactive Dashboards
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0 k-d-none k-d-md-block">
                  Receive clear, interactive dashboards tailored to your needs — with real-time updates, advanced filters and detailed visualisations
                  </p>
                  <p className="k-color-subtle !k-m-0 k-d-block k-d-md-none">
                  Interactive dashboards with real-time updates and filters
                  </p>
                </div>
              </div>
            </div>
           
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
              <div className="k-d-flex k-flex-row k-gap-4 k-align-items-center">
                <div
                  className="k-bg-tertiary k-rounded-lg k-flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-2.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: '80%'
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Seamless Integrations & Data Flows
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0 k-d-none k-d-md-block">
                  I connect your data sources — CRM, cloud services, financial tools or bespoke systems — into one streamlined platform
                  </p>
                  <p className="k-color-subtle !k-m-0 k-d-block k-d-md-none">
                  Connect all your data sources into one platform
                  </p>
                </div>
              </div>
            </div>
        
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
              <div className="k-d-flex k-flex-row k-gap-4 k-align-items-center">
                <div
                  className="k-bg-tertiary k-rounded-lg k-flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-3.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: '80%'
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Automation & Smart Notifications
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0 k-d-none k-d-md-block">
                  Automate repetitive tasks, integrate with services like Zapier, Make.com and n8n, and receive instant alerts for errors or important events
                  </p>
                  <p className="k-color-subtle !k-m-0 k-d-block k-d-md-none">
                  Automate tasks and receive instant alerts
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