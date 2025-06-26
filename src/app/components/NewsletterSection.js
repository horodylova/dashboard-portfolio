'use client'

import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { TextBox, InputSuffix } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon } from '@progress/kendo-svg-icons';

export default function NewsletterSection() {
  return (
    <section className="k-bg-app-surface k-py-8">
      <div
        className="k-d-flex k-flex-col k-gap-5 k-gap-md-10 k-align-items-center k-py-8 k-py-md-16 k-px-4 k-px-md-19 k-px-lg-24 k-bg-primary k-color-white k-rounded-xl k-mx-auto k-box-sizing-border"
        style={{ maxWidth: '935px', marginTop: '-14rem' }}
      >
        <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
          <h2 className="k-h2 !k-m-0 k-text-center">Start your 14-Day Free Trial</h2>
          <p className="k-font-size-lg k-text-center !k-m-0">
            Many desktop publishing packages and web page editors now use
            Lorem Ipsum.
          </p>
        </div>
        <div className="k-d-flex k-justify-content-center" style={{ width: "488px", maxWidth: "100%" }}>
          <TextBox
            placeholder="Your email"
            name="trial-email"
            style={{ width: '488px' }}
            suffix={() => (
              <InputSuffix>
                <Button themeColor="tertiary">Sign up Free</Button>
              </InputSuffix>
            )}
          />
        </div>
        <div className="k-d-flex k-flex-col k-flex-sm-row k-justify-content-center k-gap-4 k-gap-sm-10 k-flex-wrap">
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Free 14-day trial</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>No credit card required</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Support 24/7</div>
          </div>
          <div className="k-d-flex k-align-items-center k-gap-2">
            <SvgIcon icon={checkIcon} />
            <div>Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
}