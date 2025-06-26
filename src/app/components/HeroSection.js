'use client'

import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, playSmIcon } from '@progress/kendo-svg-icons';

export default function HeroSection() {
  return (
    <section className="k-bg-surface k-py-8 k-py-md-10 k-py-lg-25">
      <div className="k-container !k-flex-row k-gap-5 k-px-4">
        <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-12 k-gap-md-10">
          <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-5 k-gap-sm-6 k-gap-md-12">
            <div className="k-d-flex k-flex-col k-gap-4">
              <h1 className="k-h1 !k-m-0">
                Increase your website traffic with Lead Master
              </h1>
              <p className="k-font-size-lg !k-m-0">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-align-items-start k-gap-5">
              <Button
                size="large"
                themeColor="primary"
                className="!k-line-height-md"
              >
                Get a Free Trial
              </Button>
              <Button
                size="large"
                icon="play-sm"
                themeColor="primary"
                svgIcon={playSmIcon}
                fillMode="outline"
                className="!k-line-height-md"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-gap-5">
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Free 14-day trial</div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Support 24/7</div>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Cancel anytime</div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">No credit card required</div>
              </div>
            </div>
          </div>
        </div>
        <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center">
          <div
            className="k-pos-relative"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '600px',
              backgroundImage: 'url("/hero-l-1.svg")',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}