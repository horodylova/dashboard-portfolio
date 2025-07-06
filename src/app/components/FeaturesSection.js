'use client'

import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default function FeaturesSection() {
  return (
    <section id="features" className="k-bg-surface k-py-8 k-py-md-15 k-py-lg-24">
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
                  className="k-bg-tertiary k-rounded-lg"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-1.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Custom Interactive Dashboards
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                  Receive clear, interactive dashboards tailored to your needs — with real-time updates, advanced filters and detailed visualisations. Your key metrics are always at your fingertips, accessible on any device
                  </p>
                </div>
               
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
              <div className="k-d-flex k-flex-row k-gap-4 k-align-items-center">
                <div
                  className="k-bg-tertiary k-rounded-lg"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-2.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Seamless Integrations & Data Flows
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                  I connect your data sources — CRM, cloud services, financial tools or bespoke systems — into one streamlined platform. Enjoy reliable, automated data flows so you always work with up-to-date information, without manual exporting
                  </p>
                </div>
                
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
              <div className="k-d-flex k-flex-row k-gap-4 k-align-items-center">
                <div
                  className="k-bg-tertiary k-rounded-lg"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundImage: 'url("/feature-3.svg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                ></div>
                <div className="k-d-flex k-font-size-xl">
                  Automation & Smart Notifications
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                  Automate repetitive tasks, integrate with services like Zapier, Make.com and n8n, and receive instant alerts for errors or important events. Stay in control and respond quickly, ensuring nothing is missed
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