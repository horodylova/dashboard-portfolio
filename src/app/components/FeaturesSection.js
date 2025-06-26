'use client'

import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default function FeaturesSection() {
  return (
    <section className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
      <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
            Features that help you build better
          </h2>
          <p className="k-font-size-lg k-text-center k-color-subtle !k-m-0">
            Many desktop publishing packages and web page editors now use
            Lorem Ipsum.
          </p>
        </div>
        <div className="k-d-flex k-flex-col k-gap-5">
          <div className="k-d-grid k-grid-cols-1 k-grid-cols-sm-2 k-grid-cols-md-3 k-gap-4 k-gap-lg-5">
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
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
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex k-font-size-xl">
                  Website Optimization
                </div>
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="k-d-flex">
                  <Button size="small" fillMode="flat" themeColor="primary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
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
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex k-font-size-xl">
                  Email Marketing
                </div>
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="k-d-flex">
                  <Button size="small" fillMode="flat" themeColor="primary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4 k-p-6 k-bg-surface k-rounded-md">
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
              <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                <div className="k-d-flex k-font-size-xl">
                  SEO Optimization
                </div>
                <div className="k-d-flex">
                  <p className="k-color-subtle !k-m-0">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="k-d-flex">
                  <Button size="small" fillMode="flat" themeColor="primary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}