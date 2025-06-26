'use client'

import React from 'react';
import Image from 'next/image';
import { SvgIcon } from '@progress/kendo-react-common';
import { TextBox, InputSuffix } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import {
  facebookIcon,
  twitterIcon,
  pinterestIcon,
  linkedinIcon,
  mapMarkerTargetIcon,
  envelopeIcon
} from '@progress/kendo-svg-icons';

export default function Footer() {
  return (
    <footer className="k-bg-app-surface k-py-8 k-py-md-10 k-py-lg-15 k-color-subtle">
      <div className="k-container">
        <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-2 k-grid-cols-lg-6 k-gap-5 k-px-4">
          <div className="k-d-flex k-flex-col k-gap-10 k-col-span-lg-2">
            <Image src="/footer-logo.svg" alt="Logo" width={128} height={36} />
            <div className="k-d-flex k-flex-col k-gap-4">
              <div className="k-d-flex k-gap-2">
                <SvgIcon
                  icon={mapMarkerTargetIcon}
                  size="medium"
                  themeColor="tertiary"
                  className="k-flex-shrink-0"
                />
                <p className="!k-m-0">4651 South Burlington, VT 06653</p>
              </div>
              <div className="k-d-flex k-gap-2">
                <SvgIcon
                  icon={envelopeIcon}
                  size="medium"
                  themeColor="tertiary"
                  className="k-flex-shrink-0"
                />
                <p className="!k-m-0">+456 842 364 120</p>
              </div>
              <div className="k-d-flex k-gap-2">
                <SvgIcon
                  icon={envelopeIcon}
                  size="medium"
                  themeColor="tertiary"
                  className="k-flex-shrink-0"
                />
                <p className="!k-m-0">support@home4u.com</p>
              </div>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
            <div className="k-font-size-lg k-font-bold k-color-primary">
              Services
            </div>
            <div className="k-d-flex k-flex-col k-gap-3">
              <a href="#" className="k-link">Savings Account</a>
              <a href="#" className="k-link">Credit Cards</a>
              <a href="#" className="k-link">Mortgage Loans</a>
              <a href="#" className="k-link">Investement</a>
              <a href="#" className="k-link">Insurances</a>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
            <div className="k-font-size-lg k-font-bold k-color-primary">
              Help
            </div>
            <div className="k-d-flex k-flex-col k-gap-3">
              <a href="#" className="k-link">Technical Support</a>
              <a href="#" className="k-link">Account Security</a>
              <a href="#" className="k-link">Mobile App</a>
              <a href="#" className="k-link">Online banking</a>
              <a href="#" className="k-link">Credit Cards</a>
            </div>
          </div>
          <div className="k-d-flex k-flex-col k-gap-5 k-col-span-lg-2">
            <div className="k-font-size-lg k-font-bold k-color-primary">
              Subscribe to our weekly newsletter
            </div>
            <p className="!k-m-0">
              Sign Up for our newsletter to get the latest updates, offers and
              news in your inbox.
            </p>
            <TextBox
              placeholder="Your Email"
              name="signup-email"
              suffix={() => (
                <InputSuffix>
                  <Button themeColor="tertiary">Sign up Free</Button>
                </InputSuffix>
              )}
            />
            <div className="k-d-flex k-gap-1">
              <a title="Facebook" href="#" className="k-link k-p-2">
                <SvgIcon
                  icon={facebookIcon}
                  size="xlarge"
                  themeColor="tertiary"
                />
              </a>
              <a title="Twitter" href="#" className="k-link k-p-2">
                <SvgIcon
                  icon={twitterIcon}
                  size="xlarge"
                  themeColor="tertiary"
                />
              </a>
              <a title="Pinterest" href="#" className="k-link k-p-2">
                <SvgIcon
                  icon={pinterestIcon}
                  size="xlarge"
                  themeColor="tertiary"
                />
              </a>
              <a title="LinkedIn" href="#" className="k-link k-p-2">
                <SvgIcon
                  icon={linkedinIcon}
                  size="xlarge"
                  themeColor="tertiary"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}