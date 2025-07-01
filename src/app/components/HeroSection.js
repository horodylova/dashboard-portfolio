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
              <h1 className="k-h2 !k-m-0">
              Custom dashboards, smart analytics, zero blind spots
              </h1>
              <p className="k-font-size-lg !k-m-0">
              I help you automate, monitor, and grow — with React, Kendo UI, and seamless API integrations.
              </p>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-align-items-start k-gap-5">
              <Button
                size="large"
                themeColor="primary"
                className="!k-line-height-md"
              >
                Review My Data
              </Button>
              <Button
                size="large"
                icon="play-sm"
                themeColor="primary"
                svgIcon={playSmIcon}
                fillMode="outline"
                className="!k-line-height-md"
              >
                Watch 40s Demo
              </Button>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-gap-5">
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Data Security & NDA Friendly</div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Fast Delivery</div>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-sm-row k-gap-5">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Ongoing Support After Delivery</div>
              </div>
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <SvgIcon icon={checkIcon} themeColor="tertiary" />
                <div className="k-color-subtle">Personalised Dashboard Audit</div>
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