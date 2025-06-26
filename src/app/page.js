'use client'

import React from 'react';
import Image from 'next/image';

import {
  AppBar,
  AppBarSection
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { TextBox, InputSuffix } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { Avatar, Menu, MenuItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Rating } from '@progress/kendo-react-inputs';
import {
  checkIcon,
  playSmIcon,
  facebookIcon,
  twitterIcon,
  pinterestIcon,
  linkedinIcon,
  mapMarkerTargetIcon,
  envelopeIcon,
  menuIcon,
} from '@progress/kendo-svg-icons';
 
 


export default function SaasProduct() {
  return (
    <>

      <header className="k-d-contents">
        <AppBar
          className="k-pos-relative"
          style={{ boxShadow: 'none' }}
          themeColor="inherit"
        >
          <AppBarSection className="k-container !k-flex-row k-px-4">
            <div className="k-d-flex k-flex-basis-0 k-flex-grow">
              <a className="k-d-flex" href="#">
                <Image src="/logo.svg" alt="Logo" width={128} height={36} />
              </a>
            </div>
            <div className="k-d-none k-d-lg-flex k-flex-basis-0 k-flex-grow k-justify-content-center">
              <Menu>
                <MenuItem text="Home"></MenuItem>
                <MenuItem text="About"></MenuItem>
                <MenuItem text="Solutions"></MenuItem>
                <MenuItem text="Features"></MenuItem>
                <MenuItem text="Pricing"></MenuItem>
                <MenuItem text="Testimonials"></MenuItem>
              </Menu>
            </div>
            <div className="k-d-none k-d-lg-flex k-flex-basis-0 k-flex-grow k-justify-content-end">
              <div className="k-d-flex k-align-items-center k-gap-2.5">
                <Button size="small" themeColor="base" fillMode="flat">
                  Sign In
                </Button>
                <Button size="small" themeColor="primary">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="k-d-lg-none k-d-flex k-flex-basis-0 k-flex-grow k-justify-content-end">
              <Button svgIcon={menuIcon} icon="menu" themeColor={"primary"} fillMode="flat"></Button>
            </div>
          </AppBarSection>
        </AppBar>
      </header>

      <main>
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
        {/* FTs-L-2 Start */}
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
                      backgroundImage: `url('/feature-1.svg')`,
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
                      backgroundImage: `url('/feature-2.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                    <div className="k-d-flex k-font-size-xl">
                      Built-in Scripts
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
                      backgroundImage: `url('/feature-3.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                    <div className="k-d-flex k-font-size-xl">
                      Numerous Integrations
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
                      backgroundImage: `url('/feature-4.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                    <div className="k-d-flex k-font-size-xl">
                      Fully Responsive
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
                      backgroundImage: `url('/feature-5.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                    <div className="k-d-flex k-font-size-xl">
                      Evidence-based decisions
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
                      backgroundImage: `url('/feature-6.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-4">
                    <div className="k-d-flex k-font-size-xl">
                      Emedded Analytics Tool
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
        {/* FTs-L-2 End */}

        {/* FTs-L-1 Start */}
        <section className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
          <div className="k-container !k-flex-row k-gap-5 k-gap-md-10 k-gap-lg-14 k-flex-wrap k-px-4">
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-14">
              <div className="k-d-flex k-flex-col k-gap-4">
                <h2 className="k-h2 !k-m-0 k-color-primary">
                  Actionable Sales Reports to grow your business
                </h2>
                <p className="k-font-size-lg k-color-subtle !k-m-0">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum`
                </p>
              </div>
              <div className="k-d-flex k-flex-col k-gap-10">
                <div className="k-d-flex k-gap-4">
                  <div
                    className="k-bg-tertiary k-rounded-lg"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundImage: `url('/feature-1.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                    <div className="k-d-flex k-font-size-lg k-color-primary">
                      Fast adoption and web-readiness
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="k-d-flex k-gap-4">
                  <div
                    className="k-bg-tertiary k-rounded-lg"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundImage: `url('/feature-1.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                    <div className="k-d-flex k-font-size-lg k-color-primary">
                      Fast adoption and web-readiness
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested.{' '}
                      </p>
                    </div>
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
                  backgroundImage: 'url("/fts-l-1.svg")',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
        </section>
        {/* FTs-L-1 Start */}
        <section className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
          <div className="k-container !k-flex-row k-gap-5 k-gap-md-10 k-gap-lg-14 k-flex-wrap k-px-4">
            <div className="k-d-none k-d-md-flex k-flex-basis-0 k-flex-grow k-align-items-center k-justify-content-center">
              <img src="/fts-l-1.svg" alt="Image" style={{ display: "block", maxWidth: "100%", height: "auto", objectFit: "contain" }} />
            </div>
            <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-14">
              <div className="k-d-flex k-flex-col k-gap-4">
                <h2 className="k-h2 !k-m-0 k-color-primary">
                  Actionable Sales Reports to grow your business
                </h2>
                <p className="k-font-size-lg k-color-subtle !k-m-0">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum`
                </p>
              </div>
              <div className="k-d-flex k-flex-col k-gap-10">
                <div className="k-d-flex k-gap-4">
                  <div
                    className="k-bg-tertiary k-rounded-lg"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundImage: `url('/feature-1.svg')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  ></div>
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                    <div className="k-d-flex k-font-size-lg k-color-primary">
                      Fast adoption and web-readiness
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="k-d-flex k-gap-4">
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
                  <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-2">
                    <div className="k-d-flex k-font-size-lg k-color-primary">
                      Fast adoption and web-readiness
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FTs-L-1 End */}
        {/* PRIC-L-1 Start */}
        <section className="k-bg-surface k-py-8 k-py-md-15 k-py-lg-24">
          <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
              <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
                Choose the offer that suits you
              </h2>
              <p className="k-font-size-lg k-text-center k-color-subtle !k-m-0">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum.
              </p>
            </div>
            <div className="k-d-grid k-grid-cols-1 k-grid-cols-sm-2 k-grid-cols-md-4 k-align-items-end k-gap-4 k-gap-lg-5 k-w-full k-flex-wrap k-justify-content-center">
              <div
                className="k-d-flex k-flex-col k-bg-surface-alt k-elevation-1 k-rounded-lg k-overflow-hidden"
                style={{ minHeight: '665px' }}
              >
                <div className="k-d-flex k-flex-col k-align-items-center k-justify-content-center k-p-6 k-bg-primary">
                  <h3 className="k-h5 k-color-white !k-m-0">Trial</h3>
                </div>
                <div
                  className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-justify-content-between k-p-6"
                  style={{ height: '100%' }}
                >
                  <div className="k-d-flex k-flex-col k-gap-2">
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Product Training</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Advanced Analytics</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Weekly Reports</div>
                    </div>
                  </div>
                  <div className="k-d-flex k-flex-col k-gap-6">
                    <div className="k-d-flex k-flex-col k-text-center">
                      <div className="k-font-size-sm k-color-subtle">
                        Available for free for 14 days
                      </div>
                    </div>
                    <Button size="large" fillMode="outline" themeColor="base">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="k-d-flex k-flex-col k-bg-surface-alt k-elevation-1 k-rounded-lg k-overflow-hidden"
                style={{ minHeight: '665px' }}
              >
                <div className="k-d-flex k-flex-col k-align-items-center k-justify-content-center k-p-6 k-bg-primary">
                  <h3 className="k-h5 k-color-white !k-m-0">Pro</h3>
                </div>
                <div
                  className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-justify-content-between k-p-6"
                  style={{ height: '100%' }}
                >
                  <div className="k-d-flex k-flex-col k-gap-2">
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Product Training</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Advanced Analytics</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Weekly Reports</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Data History</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Collaboration Tools</div>
                    </div>
                  </div>
                  <div className="k-d-flex k-flex-col k-gap-6">
                    <div className="k-d-flex k-flex-col k-text-center">
                      <h3 className="k-h3 !k-m-0">$199</h3>
                      <div className="k-font-size-sm k-color-subtle">
                        per user per month
                      </div>
                    </div>
                    <Button size="large" fillMode="solid" themeColor="tertiary">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="k-d-flex k-flex-col k-bg-surface-alt k-elevation-1 k-rounded-lg k-overflow-hidden"
                style={{ minHeight: '695px' }}
              >
                <div className="k-d-flex k-flex-col k-align-items-center k-justify-content-center k-gap-2 k-p-6 k-bg-primary">
                  <BadgeContainer>
                    <Badge themeColor="tertiary" rounded={null} position={null}>
                      Most Popular
                    </Badge>
                  </BadgeContainer>
                  <h3 className="k-h5 k-color-white !k-m-0">Ultimate</h3>
                </div>
                <div
                  className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-justify-content-between k-p-6"
                  style={{ height: '100%' }}
                >
                  <div className="k-d-flex k-flex-col k-gap-2">
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Product Training</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Advanced Analytics</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Weekly Reports</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Data History</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Collaboration Tools</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Custom Domains</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Unlimited Members</div>
                    </div>
                  </div>
                  <div className="k-d-flex k-flex-col k-gap-6">
                    <div className="k-d-flex k-flex-col k-text-center">
                      <h3 className="k-h3 !k-m-0">$349</h3>
                      <div className="k-font-size-sm k-color-subtle">
                        per user per month
                      </div>
                    </div>
                    <Button size="large" fillMode="solid" themeColor="tertiary">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="k-d-flex k-flex-col k-bg-surface-alt k-elevation-1 k-rounded-lg k-overflow-hidden"
                style={{ minHeight: '665px' }}
              >
                <div className="k-d-flex k-flex-col k-align-items-center k-justify-content-center k-p-6 k-bg-primary">
                  <h3 className="k-h5 k-color-white !k-m-0">Enterprise</h3>
                </div>
                <div
                  className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-justify-content-between k-p-6"
                  style={{ height: '100%' }}
                >
                  <div className="k-d-flex k-flex-col k-gap-2">
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Product Training</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Advanced Analytics</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Weekly Reports</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Data History</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Collaboration Tools</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Custom Domains</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Unlimited Members</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>White Label</div>
                    </div>
                    <div className="k-d-flex k-align-items-center k-gap-3">
                      <SvgIcon icon={checkIcon} themeColor="primary" />
                      <div>Unlimited Environments</div>
                    </div>
                  </div>
                  <div className="k-d-flex k-flex-col k-gap-6">
                    <Button size="large" fillMode="solid" themeColor="primary">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PRIC-L-1 End */}
        {/* TESTMNLs-L-5 Start */}
        <section className="k-bg-app-surface k-py-8 k-py-md-15 k-py-lg-24">
          <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
              <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
                Read what our users have to say about us
              </h2>
            </div>
            <div className="k-d-grid k-grid-cols-1 k-grid-cols-md-3 k-gap-4 k-gap-lg-5">
              <div className="k-d-flex k-flex-col k-gap-5 k-p-6 k-bg-surface-alt k-border k-border-solid k-border-border k-rounded-lg k-overflow-hidden">
                <div className="k-d-flex k-align-items-center k-justify-content-between">
                  <Avatar type="image" className="!k-flex-basis-25 !k-w-25 !k-h-25">
                    <Image
                    src="/testmnl-user.png"
                    alt="User"
                    width={120}
                    height={120}
                    className="k-rounded-full"
                  />
                  </Avatar>
                  <Image
                    src="/quotes.svg"
                    alt="Quotation marks"
                    width={123}
                    height={100}
                  />
                </div>
                <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
                  <div className="k-d-flex k-flex-col k-gap-4">
                    <div className="k-d-flex k-flex-col k-gap-1">
                      <div className="k-font-size-lg k-line-height-md">Martin McDermott</div>
                      <div className="k-line-height-md k-color-subtle k-font-style-italic">
                        Business Analyst
                      </div>
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0 k-line-height-md">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from.
                      </p>
                    </div>
                    <div className="k-d-flex">
                      <Rating value={3.5} precision="half" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-gap-5 k-p-6 k-bg-surface-alt k-border k-border-solid k-border-border k-rounded-lg k-overflow-hidden">
                <div className="k-d-flex k-align-items-center k-justify-content-between">
                  <Avatar type="image" className="!k-flex-basis-25 !k-w-25 !k-h-25">
                    <img
                      src="/testmnl-user.png"
                      alt="User"
                      width="120px"
                      height="120px"
                      className="k-rounded-full"
                    />
                  </Avatar>
                  <img
                    src="/quotes.svg"
                    alt="Quotation marks"
                    width="123px"
                    height="100px"
                  />
                </div>
                <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
                  <div className="k-d-flex k-flex-col k-gap-4">
                    <div className="k-d-flex k-flex-col k-gap-1">
                      <div className="k-font-size-lg k-line-height-md">Martin McDermott</div>
                      <div className="k-line-height-md k-color-subtle k-font-style-italic">
                        Business Analyst
                      </div>
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0 k-line-height-md">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from.
                      </p>
                    </div>
                    <div className="k-d-flex">
                      <Rating value={3.5} precision="half" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="k-d-flex k-flex-col k-gap-5 k-p-6 k-bg-surface-alt k-border k-border-solid k-border-border k-rounded-lg k-overflow-hidden">
                <div className="k-d-flex k-align-items-center k-justify-content-between">
                  <Avatar type="image" className="!k-flex-basis-25 !k-w-25 !k-h-25">
                    <img
                      src="/testmnl-user.png"
                      alt="User"
                      width="120px"
                      height="120px"
                      className="k-rounded-full"
                    />
                  </Avatar>
                  <img
                    src="/quotes.svg"
                    alt="Quotation marks"
                    width="123px"
                    height="100px"
                  />
                </div>
                <div className="k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
                  <div className="k-d-flex k-flex-col k-gap-4">
                    <div className="k-d-flex k-flex-col k-gap-1">
                      <div className="k-font-size-lg k-line-height-md">Martin McDermott</div>
                      <div className="k-line-height-md k-color-subtle k-font-style-italic">
                        Business Analyst
                      </div>
                    </div>
                    <div className="k-d-flex">
                      <p className="!k-m-0 k-line-height-md">
                        The standard chunk of Lorem Ipsum used since the 1500s is
                        reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from.
                      </p>
                    </div>
                    <div className="k-d-flex">
                      <Rating value={3.5} precision="half" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TESTMNLs-L-5 End */}
        {/* PTRs-L-3 Start */}
        <section className="k-bg-surface k-pt-24 k-pb-30">
          <div className="k-container k-gap-5 k-gap-md-10 k-gap-lg-14 k-align-items-center k-px-4">
            <div className="k-d-flex k-flex-col k-align-items-center k-gap-4">
              <h2 className="k-h2 !k-m-0 k-color-primary k-text-center">
                Our trusted partners
              </h2>
            </div>
            <div className="k-d-flex k-flex-wrap k-flex-col k-flex-md-row k-align-items-center k-p-8 k-gap-10 k-mb-12 k-justify-content-between k-w-full">
              <Image src="/logo-1.svg" alt="Logo 1" width={100} height={50} />
              <Image src="/logo-2.svg" alt="Logo 2" width={100} height={50} />
              <Image src="/logo-3.svg" alt="Logo 3" width={100} height={50} />
              <Image src="/logo-4.svg" alt="Logo 4" width={100} height={50} />
              <Image src="/logo-5.svg" alt="Logo 5" width={100} height={50} />
              <Image src="/logo-6.svg" alt="Logo 6" width={100} height={50} />
              <Image src="/logo-7.svg" alt="Logo 7" width={100} height={50} />
            </div>
          </div>
        </section>
        {/* PTRs-L-3 End */}

        {/* NEWSL-L-4 Start */}
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
        {/* NEWSL-L-4 End */}
      </main>
      {/* FTR-L-2 Start */}
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
                <a href="#" className="k-link">
                  Savings Account
                </a>
                <a href="#" className="k-link">
                  Credit Cards
                </a>
                <a href="#" className="k-link">
                  Mortgage Loans
                </a>
                <a href="#" className="k-link">
                  Investement
                </a>
                <a href="#" className="k-link">
                  Insurances
                </a>
              </div>
            </div>
            <div className="k-d-flex k-flex-col k-flex-1 k-gap-5">
              <div className="k-font-size-lg k-font-bold k-color-primary">
                Help
              </div>
              <div className="k-d-flex k-flex-col k-gap-3">
                <a href="#" className="k-link">
                  Technical Support
                </a>
                <a href="#" className="k-link">
                  Account Security
                </a>
                <a href="#" className="k-link">
                  Mobile App
                </a>
                <a href="#" className="k-link">
                  Online banking
                </a>
                <a href="#" className="k-link">
                  Credit Cards
                </a>
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
      {/* FTR-L-2 End */}
    </>
  );
}
